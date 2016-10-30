import {AfterViewInit, Component} from "@angular/core";
@Component({
  selector: "targetTable",
  template: `
    <table class="table table-bordered">
    <tr>
      <th>Nombre de flèches</th>
      <th colspan="3">Point par Flèche</th>
      <th>Total des 3 flèches</th>
      <th>Total cumulé</th>
    </tr>
    <tr>
      <td class="text-center">3</td>
      <td class="text-center">9</td>
      <td class="text-center">9</td>
      <td class="text-center">8</td>
      <td class="text-center"></td>
      <td class="text-center"></td>
      <td class="text-center"></td>
    </tr>
</table>
    `
})
export class TableComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }

}

export class ScoreService {
  scoreHistory: number[];


}
