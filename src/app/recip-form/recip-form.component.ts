import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {RecetteService} from "../service/recette.service";

@Component({
  selector: 'app-recip-form',
  templateUrl: './recip-form.component.html',
  styleUrls: ['./recip-form.component.css']
})
export class RecipFormComponent {
  constructor(private rs: RecetteService) {
  }
  formulaire(form: NgForm){
    this.rs.createRecipe(form.value);
    console.log(sessionStorage.getItem('recipes'))
  }

}
