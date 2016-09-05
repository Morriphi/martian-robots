const robot = require('./robot');

module.exports = (width, height) => {
  const obj = {};

  const robots = [];

  obj.spawn = (x, y, direction) => {
    robots.push(robot(x, y, direction));
  };

  obj.left = () => currentRobot().left();

  obj.right = () => currentRobot().right();

  obj.forward = () => currentRobot().forward();

  obj.positions = () => robots.map(x => x.position(isOutsideMap));

  function currentRobot () {
    return robots[robots.length - 1];
  }

  function isOutsideMap (x, y) {
    return x < 0 || y < 0 || x > (width - 1) || y > (height - 1);
  }

  return obj;
};
