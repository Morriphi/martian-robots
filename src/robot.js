module.exports = (x, y, direction) => {
  const obj = {};

  let _x = x;
  let _y = y;
  let _direction = direction;

  const positions = {
    'N': {forward () { _y++; }, right () { _direction = 'E'; }, left () { _direction = 'W'; }},
    'S': {forward () { _y--; }, right () { _direction = 'W'; }, left () { _direction = 'E'; }},
    'E': {forward () { _x++; }, right () { _direction = 'S'; }, left () { _direction = 'N'; }},
    'W': {forward () { _x--; }, right () { _direction = 'N'; }, left () { _direction = 'S'; }}
  };

  obj.left = () => execute('left');

  obj.right = () => execute('right');

  obj.forward = () => execute('forward');

  obj.position = (isOutsideMap) => {
    var s = `${_x} ${_y} ${_direction}`;
    return isOutsideMap(_x, _y) ? `${s} LOST` : s;
  };

  function execute (action) {
    positions[_direction] ? positions[_direction][action]() : null;
  }

  return obj;
};
