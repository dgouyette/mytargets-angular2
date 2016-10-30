import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: "targetCanvas",
  template: `
  <div>
    <canvas #targetCanvas width="620" height="620 " style="background:white; border : 1px solid black;"></canvas>
  </div>
    `
})


export class Slice{
  size: number;
  color: string;

  constructor(size: number, color: string) {
    this.size = size;
    this.color = color;
  }
}

export class TargetComponent implements AfterViewInit {
  blue = "#00b5ff";
  red = "#ff0000";
  yellow = "#feff4d";
  black = "#000000";
  centerX = 620 / 2;
  centerY = 620 / 2;

  //sizes  =[[60], [54], [48], [42], [36], [30], [24], [18], [12], [6], [3, this.yellow]];
  sizes = [
    new Slice(18, this.red),
    new Slice(12, this.red),
    new Slice(6, this.yellow),
    new Slice(3, this.yellow)
  ];


  drawLine(radius: number, color: string): void {
    var ctx = this.targetCanvas.nativeElement.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = this.black;
    ctx.stroke()
  }


  @ViewChild("targetCanvas") targetCanvas: ElementRef;

  ngAfterViewInit() {
    this.sizes.map(s => this.drawLine(s.size, s.color))
  }
}
