const east = require('./directions/east');
const west = require('./directions/west');
const north = require('./directions/north');
const south = require('./directions/south');

module.exports = (x, y, dir) => {
  const obj = {};

  let isLost = false;
  let direction = dir;
  let currentPosition = {x, y};

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
    const forwardPosition = execute('forward', currentPosition);
    if (forwardPosition) {
      if (isOutsideMap(forwardPosition) && !hasScent(forwardPosition)) {
        isLost = true;
        leaveScent(forwardPosition);
      } else if (!isLost && !hasScent(forwardPosition)) {
        currentPosition = forwardPosition;
      }
    }
  };

  obj.position = () => `${currentPosition.x} ${currentPosition.y} ${direction}${isLost ? ' LOST' : ''}`;

  function execute (action) {
    return positions[direction] ? positions[direction][action].apply(null, [].slice.call(arguments, 1)) : null;
  }

  return obj;
};
