module.exports = {
  forward (position) {
    return {x: position.x - 1, y: position.y};
  },

  right () {
    return 'N';
  },

  left () {
    return 'S';
  }
};
