import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

class Slice {
  size: number;
  backgroundColor: string;
  lineColor: string;
  lineSize: number;
  score: number;
  dotted: boolean = false;

  constructor(size: number, backgroundColor: string, lineColor = "#000", lineSize: number, score: number, dotted: boolean = false) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.lineColor = lineColor;
    this.lineSize = lineSize;
    this.score = score;
    this.dotted = dotted;
  }
}

@Component({
  selector: "targetCanvas",
  template: `
  <div>
    <canvas #targetCanvas width="620" height="620" click="clicked($event)"></canvas>
  </div>
    `
})
export class TargetComponent implements AfterViewInit {
  blue = "#00b5ff";
  red = "#ff0000";
  yellow = "#feff4d";
  black = "#000000";
  white = "#fff";
  centerX = 620 / 2;
  centerY = 620 / 2;

  private ratio = 5;

  computePoint(x1: number, y1: number): number {
    var x0 = this.centerX;
    var y0 = this.centerY;
    let d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
    let score = this.slices.filter(s => s.size * this.ratio >= d).map(s => s.score);
    return Math.max(...score);
  }

  scoreHistory: number[] = [];

  clicked(event: MouseEvent) {
    let score = this.computePoint(event.layerX, event.layerY);
    this.scoreHistory.push(score);
  }


  slices = [
    new Slice(60, this.white, this.black, 1.5, 1),
    new Slice(54, this.white, this.black, 1, 2),
    new Slice(48, this.black, this.black, 1, 3),
    new Slice(42, this.black, this.white, 1, 4),
    new Slice(36, this.blue, this.black, 1, 5),
    new Slice(30, this.blue, this.black, 1, 6),
    new Slice(24, this.red, this.black, 1, 7),
    new Slice(18, this.red, this.black, 1, 8),
    new Slice(12, this.yellow, this.black, 1, 9),
    new Slice(6, this.yellow, this.black, 1, 10),
    new Slice(3, this.yellow, this.black, 1, 10, true)
  ];

  drawSlice(slice: Slice): void {
    var ctx = this.targetCanvas.nativeElement.getContext("2d");
    ctx.beginPath();
    if (slice.dotted) {
      ctx.setLineDash([2, 3]);
    }
    ctx.arc(this.centerX, this.centerY, slice.size * 5, 0, 2 * Math.PI, false);
    ctx.lineWidth = slice.lineSize;
    ctx.strokeStyle = slice.lineColor;
    ctx.fillStyle = slice.backgroundColor;
    ctx.fill();
    ctx.stroke()
  }


  @ViewChild("targetCanvas") targetCanvas: ElementRef;

  ngAfterViewInit() {
    this.slices.map(s => this.drawSlice(s))
  }
}
