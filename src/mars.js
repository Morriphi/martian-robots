const Grid = require('./grid');
const Robot = require('./robot');

module.exports = (width, height) => {
  const obj = {};

  const robots = [];
  const scents = [];

  const grid = Grid(width, height);

  obj.spawn = (x, y, direction) => {
    if (!grid.isOutside({x, y})) {
      robots.push(Robot(x, y, direction));
    }
  };

  function hasScent ({x, y}) {
    return scents.filter(s => s.x === x && s.y === y).length > 0;
  }

  function leaveScent (position) {
    if (grid.isOutside(position)) {
      scents.push(position);
    }
  }

  obj.left = () => currentRobot().left();

  obj.right = () => currentRobot().right();

  obj.forward = () => currentRobot().forward(hasScent, leaveScent, grid.isOutside);

  obj.positions = () => robots.map(x => x.position());

  function currentRobot () {
    return robots[robots.length - 1];
  }

  return obj;
};
