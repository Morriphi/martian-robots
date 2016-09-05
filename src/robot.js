module.exports = (x, y, direction) => {
  const obj = {};

  let _x = x;
  let _y = y;
  let _direction = direction;

  obj.right = () => {
    const rightCommands = {
      'N': () => { _direction = 'E'; },
      'E': () => { _direction = 'S'; },
      'S': () => { _direction = 'W'; },
      'W': () => { _direction = 'N'; }
    };

    rightCommands[_direction] ? rightCommands[_direction]() : null;
  };

  obj.left = () => {
    const leftCommands = {
      'N': () => { _direction = 'W'; },
      'E': () => { _direction = 'N'; },
      'S': () => { _direction = 'E'; },
      'W': () => { _direction = 'S'; }
    };

    leftCommands[_direction] ? leftCommands[_direction]() : null;
  };

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

