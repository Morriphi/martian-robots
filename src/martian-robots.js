const robot = require('./robot');

module.exports = (width, height) => {
  const obj = {};

  const robots = [];

  obj.spawn = (x, y, direction) => {
    robots.push(robot(x, y, direction));
  };

  obj.right = () => {
    robots[robots.length - 1].right();
  };

  obj.left = () => {
    robots[robots.length - 1].left();
  };

  obj.forward = () => {
    robots[robots.length - 1].forward();
  };

  obj.positions = () => robots.map(x => x.position(isOutsideMap));

  function isOutsideMap (x, y) {
    return x < 0 || y < 0 || x > (width - 1) || y > (height - 1);
  }

  return obj;
};
