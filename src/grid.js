module.exports = (width, height) => {
  return {
    isOutside (x, y) {
      return x < 0 || y < 0 || x > (width - 1) || y > (height - 1);
    }
  };
};
