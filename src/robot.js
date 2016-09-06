module.exports = (x, y, direction) => {
  const obj = {};

  let _x = x;
  let _y = y;
  let _direction = direction;

  const positions = {
    'N': {forward (hasScent) { if (!hasScent(_x, _y + 1)) { _y++; } }, right () { _direction = 'E'; }, left () { _direction = 'W'; }},
    'S': {forward (hasScent) { if (!hasScent(_x, _y - 1)) { _y--; } }, right () { _direction = 'W'; }, left () { _direction = 'E'; }},
    'E': {forward (hasScent) { if (!hasScent(_x + 1, _y)) { _x++; } }, right () { _direction = 'S'; }, left () { _direction = 'N'; }},
    'W': {forward (hasScent) { if (!hasScent(_x - 1, _y)) { _x--; } }, right () { _direction = 'N'; }, left () { _direction = 'S'; }}
  };

  obj.left = () => execute('left');

  obj.right = () => execute('right');

  obj.forward = (hasScent, leaveScent) => {
    execute('forward', hasScent);
    leaveScent(_x, _y);
  };

  obj.position = (isOutsideMap) => {
    var s = `${_x} ${_y} ${_direction}`;
    return isOutsideMap(_x, _y) ? `${s} LOST` : s;
  };

  function execute (action, hasScent, leaveScent) {
    positions[_direction] ? positions[_direction][action](hasScent, leaveScent) : null;
  }

  return obj;
};
