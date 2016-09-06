const Grid = require('./grid');
const Robot = require('./robot');

module.exports = (width, height) => {
  const obj = {};

  const robots = [];
  const scents = [];

  const grid = Grid(width, height);

  obj.spawn = (x, y, direction) => {
    robots.push(Robot(x, y, direction));
  };

  function hasScent (x, y) {
    return scents.filter(s => s.x === x && s.y === y).length > 0;
  }

  function leaveScent (x, y) {
    if (grid.isOutside(x, y)) {
      scents.push({x, y});
    }
  }

  obj.left = () => currentRobot().left();

  obj.right = () => currentRobot().right();

  obj.forward = () => currentRobot().forward(hasScent, leaveScent);

  obj.positions = () => robots.map(x => x.position(grid.isOutside));

  function currentRobot () {
    return robots[robots.length - 1];
  }

  return obj;
};
