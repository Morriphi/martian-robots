const MartianRobots = require('../src/martian-robots');
const expect = require('chai').expect;

describe('Robots', () => {
  let martianRobots;

  beforeEach(() => {
    martianRobots = MartianRobots(2, 2);
  });

  it('can spawn', () => {
    martianRobots.spawn(0, 0, 'E');
    expect(martianRobots.positions()).to.eql(['0 0 E']);
    martianRobots.spawn(1, 1, 'N');
    expect(martianRobots.positions()).to.eql(['0 0 E', '1 1 N']);
  });

  it('can spawn Mars but are LOST', () => {
    martianRobots.spawn(1, 2, 'E');
    martianRobots.spawn(2, 1, 'N');
    expect(martianRobots.positions()).to.eql(['1 2 E LOST', '2 1 N LOST']);
  });

  it('cannot move forward in INVALID direction', () => {
    martianRobots.spawn(0, 0, 'X');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 X']);
  });

  it('can move forward to the NORTH', () => {
    martianRobots.spawn(0, 0, 'N');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 1 N']);
  });

  it('are LOST if move forward off Mars to the NORTH', () => {
    martianRobots.spawn(0, 0, 'N');
    martianRobots.forward();
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 2 N LOST']);
  });

  it('can move forward to the SOUTH', () => {
    martianRobots.spawn(0, 1, 'S');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 S']);
  });

  it('are LOST if move forward off Mars to the SOUTH', () => {
    martianRobots.spawn(0, 1, 'S');
    martianRobots.forward();
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 -1 S LOST']);
  });

  it('can move forward to the EAST', () => {
    martianRobots.spawn(0, 0, 'E');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['1 0 E']);
  });

  it('are LOST if move forward off Mars to the EAST', () => {
    martianRobots.spawn(0, 0, 'E');
    martianRobots.forward();
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['2 0 E LOST']);
  });

  it('can move forward to the WEST', () => {
    martianRobots.spawn(1, 0, 'W');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 W']);
  });

  it('are LOST if move forward off Mars to the WEST', () => {
    martianRobots.spawn(1, 0, 'W');
    martianRobots.forward();
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['-1 0 W LOST']);
  });
});
