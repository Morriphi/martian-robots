const Grid = require('./grid');
const Robot = require('./robot');

module.exports = (width, height) => {
  const obj = {};

  const robots = [];
  const grid = Grid(width, height);

  obj.spawn = (x, y, direction) => {
    robots.push(Robot(x, y, direction));
  };

  obj.left = () => currentRobot().left();

  obj.right = () => currentRobot().right();

  obj.forward = () => currentRobot().forward();

  obj.positions = () => robots.map(x => x.position(grid.isOutside));

  function currentRobot () {
    return robots[robots.length - 1];
  }

  return obj;
};
