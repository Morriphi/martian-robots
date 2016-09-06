const Mars = require('../src/mars');
const expect = require('chai').expect;

describe('Martian Robots', () => {
  it('acceptance', () => {
    const mars = Mars(5, 3);

    mars.spawn(1, 1, 'E');

    mars.right();
    mars.forward();
    mars.right();
    mars.forward();
    mars.right();
    mars.forward();
    mars.right();
    mars.forward();

    expect(mars.positions()).to.eql(['1 1 E']);

    mars.spawn(3, 2, 'N');

    mars.forward();
    mars.right();
    mars.right();
    mars.forward();
    mars.left();
    mars.left();
    mars.forward();
    mars.forward();
    mars.right();
    mars.right();
    mars.forward();
    mars.left();
    mars.left();

    expect(mars.positions()).to.eql(['1 1 E', '3 3 N LOST']);

    mars.spawn(0, 3, 'W');

    mars.left();
    mars.left();
    mars.forward();
    mars.forward();
    mars.forward();
    mars.left();
    mars.forward();
    mars.left();
    mars.forward();
    mars.left();

    expect(mars.positions()).to.eql(['1 1 E', '3 3 N LOST', '2 3 S']);
  });
});
