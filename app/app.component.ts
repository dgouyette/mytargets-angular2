import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

class Slice{
  size: number;
  backgroundColor: string;
  lineColor: string;
  lineSize: number;

  constructor(size: number, backgroundColor: string, lineColor  = "#000", lineSize = 1) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.lineColor= lineColor;
    this.lineSize= lineSize;
  }
  constructor(size: number, backgroundColor: string, lineSize = 1) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.lineColor= "#000";
    this.lineSize= lineSize;
  }
}
@Component({
  selector: "targetCanvas",
  template: `
  <div>
    <canvas #targetCanvas width="620" height="620 " style="background:white; border : 1px solid black;"></canvas>
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

  sizes  =[
    new Slice(60, this.white, this.black, 1.5),
    new Slice(54, this.white),
    new Slice(48, this.black, this.black),
    new Slice(42, this.black, this.white),
    new Slice(36, this.blue),
    new Slice(30, this.blue),
    new Slice(24, this.red),
    new Slice(18, this.red),
    new Slice(12, this.yellow),
    new Slice(6, this.yellow),
    new Slice(3, this.yellow)
  ];

  drawLine(radius: number, backgroundColor: string, lineColor : string, lineSize : number): void {
    var ctx = this.targetCanvas.nativeElement.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineSize;
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.stroke()
  }


  @ViewChild("targetCanvas") targetCanvas: ElementRef;

  ngAfterViewInit() {
    this.sizes.map(s => this.drawLine(s.size*5, s.backgroundColor, s.lineColor, s.lineSize))
  }
}
