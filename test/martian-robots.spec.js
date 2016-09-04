const MartianRobots = require('../src/martian-robots');
const expect = require('chai').expect;

describe('Robots', () => {
  it('can spawn', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(0, 0, 'E');
    expect(martianRobots.positions()).to.eql(['0 0 E']);
    martianRobots.spawn(1, 1, 'N');
    expect(martianRobots.positions()).to.eql(['0 0 E', '1 1 N']);
  });

  it('cannot move forward in INVALID direction', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(0, 0, 'X');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 X']);
  });

  it('can move forward to the NORTH', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(0, 0, 'N');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 1 N']);
  });

  it('can move forward to the SOUTH', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(0, 1, 'S');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 S']);
  });

  it('can move forward to the EAST', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(0, 0, 'E');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['1 0 E']);
  });

  it('can move forward to the WEST', () => {
    const martianRobots = MartianRobots(2, 2);
    martianRobots.spawn(1, 0, 'W');
    martianRobots.forward();
    expect(martianRobots.positions()).to.eql(['0 0 W']);
  });
});
