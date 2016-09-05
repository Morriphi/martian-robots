const Mars = require('../src/mars');
const expect = require('chai').expect;

describe('Robots', () => {
  let mars;

  beforeEach(() => {
    mars = Mars(2, 2);
  });

  it('can spawn', () => {
    mars.spawn(0, 0, 'E');
    expect(mars.positions()).to.eql(['0 0 E']);
    mars.spawn(1, 1, 'N');
    expect(mars.positions()).to.eql(['0 0 E', '1 1 N']);
  });

  it('can spawn Mars but are LOST', () => {
    mars.spawn(1, 2, 'E');
    mars.spawn(2, 1, 'N');
    expect(mars.positions()).to.eql(['1 2 E LOST', '2 1 N LOST']);
  });

  it('cannot move forward in INVALID direction', () => {
    mars.spawn(0, 0, 'X');
    mars.forward();
    expect(mars.positions()).to.eql(['0 0 X']);
  });

  it('can move forward to the NORTH', () => {
    mars.spawn(0, 0, 'N');
    mars.forward();
    expect(mars.positions()).to.eql(['0 1 N']);
  });

  it('are LOST if move forward off Mars to the NORTH', () => {
    mars.spawn(0, 0, 'N');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['0 2 N LOST']);
  });

  it('can move forward to the SOUTH', () => {
    mars.spawn(0, 1, 'S');
    mars.forward();
    expect(mars.positions()).to.eql(['0 0 S']);
  });

  it('are LOST if move forward off Mars to the SOUTH', () => {
    mars.spawn(0, 1, 'S');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['0 -1 S LOST']);
  });

  it('can move forward to the EAST', () => {
    mars.spawn(0, 0, 'E');
    mars.forward();
    expect(mars.positions()).to.eql(['1 0 E']);
  });

  it('are LOST if move forward off Mars to the EAST', () => {
    mars.spawn(0, 0, 'E');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['2 0 E LOST']);
  });

  it('can move forward to the WEST', () => {
    mars.spawn(1, 0, 'W');
    mars.forward();
    expect(mars.positions()).to.eql(['0 0 W']);
  });

  it('are LOST if move forward off Mars to the WEST', () => {
    mars.spawn(1, 0, 'W');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['-1 0 W LOST']);
  });

  it('can rotate right from NORTH', () => {
    mars.spawn(0, 0, 'N');
    mars.right();
    expect(mars.positions()).to.eql(['0 0 E']);
  });

  it('can rotate right from EAST', () => {
    mars.spawn(0, 0, 'E');
    mars.right();
    expect(mars.positions()).to.eql(['0 0 S']);
  });

  it('can rotate right from SOUTH', () => {
    mars.spawn(0, 0, 'S');
    mars.right();
    expect(mars.positions()).to.eql(['0 0 W']);
  });

  it('can rotate right from WEST', () => {
    mars.spawn(0, 0, 'W');
    mars.right();
    expect(mars.positions()).to.eql(['0 0 N']);
  });

  it('cannot rotate right from INVALID direction', () => {
    mars.spawn(0, 0, 'X');
    mars.right();
    expect(mars.positions()).to.eql(['0 0 X']);
  });

  it('can rotate left from NORTH', () => {
    mars.spawn(0, 0, 'N');
    mars.left();
    expect(mars.positions()).to.eql(['0 0 W']);
  });

  it('can rotate left from EAST', () => {
    mars.spawn(0, 0, 'E');
    mars.left();
    expect(mars.positions()).to.eql(['0 0 N']);
  });

  it('can rotate left from SOUTH', () => {
    mars.spawn(0, 0, 'S');
    mars.left();
    expect(mars.positions()).to.eql(['0 0 E']);
  });

  it('can rotate left from WEST', () => {
    mars.spawn(0, 0, 'W');
    mars.left();
    expect(mars.positions()).to.eql(['0 0 S']);
  });

  it('cannot rotate right from INVALID direction', () => {
    mars.spawn(0, 0, 'X');
    mars.left();
    expect(mars.positions()).to.eql(['0 0 X']);
  });
});
