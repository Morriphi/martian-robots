module.exports = {
  forward (position) {
    return {x: position.x + 1, y: position.y};
  },

  right () {
    return 'S';
  },

  left () {
    return 'N';
  }
};
