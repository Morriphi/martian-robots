module.exports = () => {
  const obj = {};

  const robots = [];

  obj.spawn = (x, y, direction) => {
    robots.push(robot(x, y, direction));
  };

  obj.forward = () => {
    robots[robots.length - 1].forward();
  };

  obj.positions = () => robots.map(x => x.position());

  return obj;
};

function robot (x, y, direction) {
  const obj = {};

  let _x = x;
  let _y = y;
  let _direction = direction;

  obj.forward = () => {
    const forwardCommands = {
      'N': () => _y++,
      'S': () => _y--,
      'E': () => _x++,
      'W': () => _x--
    };

    forwardCommands[_direction] ? forwardCommands[_direction]() : null;
  };

  obj.position = (isOutsideMap) => {
    return `${_x} ${_y} ${_direction}`;
  };

  return obj;
}
