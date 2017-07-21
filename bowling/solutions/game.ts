export default class BowlingGame {
  private score = 0;
  private currentIndex: number = 0;
  private rolls: number[] = [];

  roll(pins: number) {
    this.rolls[this.currentIndex++] = pins;
  }

  getScore() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] +
        this.rolls[frameIndex + 1] == 10) // spare
      {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.rolls[frameIndex] +
          this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;

  }
}