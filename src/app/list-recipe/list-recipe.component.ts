import {Component, Input, OnInit} from '@angular/core';
import {RecetteService} from "../service/recette.service";

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css'],
})
export class ListRecipeComponent {


constructor(private rs: RecetteService) {}

recipes:any
  type = "all"
ngOnInit(){
this.recipes = this.rs.readRecipe();
  }
}
