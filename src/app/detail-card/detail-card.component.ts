import {Component, Input} from '@angular/core';
import {RecetteService} from "../service/recette.service";

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  constructor(private rs: RecetteService) {
  }

@Input() type: any

  recettes = this.rs.recipes
}
