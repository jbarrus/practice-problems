import BowlingGame from './game';

describe('a bowling game', () => {
  let game: BowlingGame;

  beforeEach(() => game = new BowlingGame());

  it('should score 0 for a gutter game', () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
  });

  it('should score 20 if one pin is knocked down every roll', () => {
    rollMany(20, 1);
    expect(game.getScore()).toBe(20);
  });

  it('should add pins from the next roll after a spare', () => {
    game.roll(5);
    game.roll(5);
    for (let i=0; i<18; i++) {
      game.roll(1);
    }
    expect(game.getScore()).toBe(29);
  });

  function rollMany(times: number, pins: number) {
    for (let i=0; i<times; i++) {
      game.roll(pins);
    }
  }
});