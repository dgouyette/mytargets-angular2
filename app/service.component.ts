

export class ScoreService {
  scoreHistory: number[] = [];
  constructor(){
    console.log("construct")
  }

  push(score: number) {
    console.log("push"+score);
    this.scoreHistory.push(score);
  }
}
