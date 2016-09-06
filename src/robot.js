module.exports = (x, y, direction) => {
  const obj = {};

  let _x = x;
  let _y = y;
  let _dir = direction;

  const positions = {
    'N': {forward (hasScent) { if (!hasScent(_x, _y + 1)) { _y++; } }, right () { _dir = 'E'; }, left () { _dir = 'W'; }},
    'S': {forward (hasScent) { if (!hasScent(_x, _y - 1)) { _y--; } }, right () { _dir = 'W'; }, left () { _dir = 'E'; }},
    'E': {forward (hasScent) { if (!hasScent(_x + 1, _y)) { _x++; } }, right () { _dir = 'S'; }, left () { _dir = 'N'; }},
    'W': {forward (hasScent) { if (!hasScent(_x - 1, _y)) { _x--; } }, right () { _dir = 'N'; }, left () { _dir = 'S'; }}
  };

  obj.left = () => execute('left');

  obj.right = () => execute('right');

  obj.forward = (hasScent, leaveScent) => {
    execute('forward', hasScent);
    leaveScent(_x, _y);
  };

  obj.position = (isOutsideMap) => {
    var s = `${_x} ${_y} ${_dir}`;
    return isOutsideMap(_x, _y) ? `${s} LOST` : s;
  };

  function execute (action, hasScent) {
    positions[_dir] ? positions[_dir][action](hasScent) : null;
  }

  return obj;
};
