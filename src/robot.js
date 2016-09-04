module.exports = (x, y, direction) => {
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
    var s = `${_x} ${_y} ${_direction}`;
    return isOutsideMap(_x, _y) ? `${s} LOST` : s;
  };

  return obj;
};

