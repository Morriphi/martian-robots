const Mars = require('../src/mars');
const expect = require('chai').expect;

describe('Robots', () => {
  let mars;

  beforeEach(() => {
    mars = Mars(5, 3);
  });

  it('can spawn', () => {
    mars.spawn(0, 0, 'E');
    expect(mars.positions()).to.eql(['0 0 E']);
    mars.spawn(1, 1, 'N');
    expect(mars.positions()).to.eql(['0 0 E', '1 1 N']);
  });

  it('cannot spawn outside mars', () => {
    mars.spawn(1, 4, 'E');
    mars.spawn(6, 1, 'N');
    expect(mars.positions()).to.eql([]);
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
    mars.spawn(1, 2, 'N');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['1 3 N LOST']);
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
    expect(mars.positions()).to.eql(['0 0 S LOST']);
  });

  it('can move forward to the EAST', () => {
    mars.spawn(0, 0, 'E');
    mars.forward();
    expect(mars.positions()).to.eql(['1 0 E']);
  });

  it('are LOST if move forward off Mars to the EAST', () => {
    mars.spawn(4, 0, 'E');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['5 0 E LOST']);
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
    expect(mars.positions()).to.eql(['0 0 W LOST']);
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

  it('cannot get LOST if previous robot left a scent moving SOUTH', () => {
    mars.spawn(0, 0, 'S');
    mars.forward();
    mars.spawn(0, 0, 'S');
    mars.forward();
    expect(mars.positions()).to.eql(['0 0 S LOST', '0 0 S']);
  });

  it('cannot get LOST if previous robot left a scent moving NORTH', () => {
    mars.spawn(0, 2, 'N');
    mars.forward();
    mars.forward();
    mars.spawn(0, 2, 'N');
    mars.forward();
    mars.forward();

    expect(mars.positions()).to.eql(['0 3 N LOST', '0 3 N']);
  });

  it('cannot get LOST if previous robot left a scent moving EAST', () => {
    mars.spawn(4, 1, 'E');
    mars.forward();
    mars.forward();
    mars.spawn(4, 1, 'E');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['5 1 E LOST', '5 1 E']);
  });

  it('cannot get LOST if previous robot left a scent moving WEST', () => {
    mars.spawn(0, 0, 'W');
    mars.forward();
    mars.spawn(0, 0, 'W');
    mars.forward();
    expect(mars.positions()).to.eql(['0 0 W LOST', '0 0 W']);
  });

  it('can still get lost if scent is at different location', () => {
    mars.spawn(1, 2, 'N');
    mars.forward();
    mars.forward();
    mars.spawn(2, 2, 'N');
    mars.forward();
    mars.forward();
    expect(mars.positions()).to.eql(['1 3 N LOST', '2 3 N LOST']);
  });

  it('stops responding to left when LOST', () => {
    mars.spawn(0, 0, 'S');
    mars.forward();
    mars.left();

    expect(mars.positions()).to.eql(['0 0 S LOST']);
  });

  it('stops responding to right when LOST', () => {
    mars.spawn(0, 0, 'S');
    mars.forward();
    mars.right();

    expect(mars.positions()).to.eql(['0 0 S LOST']);
  });

  it('stops responding to forward SOUTH when LOST', () => {
    mars.spawn(0, 1, 'S');
    mars.forward();
    mars.forward();

    expect(mars.positions()).to.eql(['0 0 S LOST']);
  });
});
