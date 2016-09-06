module.exports = {
  forward (position) {
    return {x: position.x, y: position.y + 1};
  },

  right () {
    return 'E';
  },

  left () {
    return 'W';
  }
};
