import {AfterViewInit, Component} from "@angular/core";
import {ScoreService} from "./service.component";
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
{{scores}}
    `
})
export class TableComponent implements AfterViewInit {

  scoreService : ScoreService;

  scores : number[];

  constructor(_scoreService : ScoreService){
    this.scoreService = _scoreService;
  }
  ngAfterViewInit(): void {
    this.scores = this.scoreService.scoreHistory;

  }

}

