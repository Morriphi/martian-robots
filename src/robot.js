const east = require('./directions/east');
const west = require('./directions/west');
const north = require('./directions/north');
const south = require('./directions/south');

module.exports = (x, y, dir) => {
  const obj = {};

  let isLost = false;
  let direction = dir;
  let position = {x, y};

  const positions = {'N': north, 'S': south, 'E': east, 'W': west};

  obj.left = () => {
    if (!isLost) {
      const dir = execute('left');
      if (dir) {
        direction = dir;
      }
    }
  };

  obj.right = () => {
    if (!isLost) {
      const dir = execute('right');
      if (dir) {
        direction = dir;
      }
    }
  };

  obj.forward = (hasScent, leaveScent, isOutsideMap) => {
    const pos = execute('forward', position);
    if (pos) {
      if (isOutsideMap(pos) && !hasScent(pos)) {
        isLost = true;
        leaveScent(pos);
      } else if (!isLost && !hasScent(pos)) {
        position = pos;
      }
    }
  };

  obj.position = () => `${position.x} ${position.y} ${direction}${isLost ? ' LOST' : ''}`;

  function execute (action) {
    return positions[direction] ? positions[direction][action].apply(null, [].slice.call(arguments, 1)) : null;
  }

  return obj;
};
