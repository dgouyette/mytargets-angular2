import {AfterViewInit, Component} from "@angular/core";
@Component({
  selector: "targetTable",
  template: `
    <table style="border: 1px solid black;">
    <tr>
    <td>I'm a table</td>
</tr>
</table>
    `
})
export class TableComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }

}
