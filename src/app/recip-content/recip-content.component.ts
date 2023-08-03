import {Component, Input} from '@angular/core';
import {RecetteService} from "../service/recette.service";

@Component({
  selector: 'app-recip-content',
  templateUrl: './recip-content.component.html',
  styleUrls: ['./recip-content.component.css']
})
export class RecipContentComponent {
  constructor(private rs: RecetteService) {}
  readRecipe = true;
  visible = false ;
  recetteVisible = true;
  btnText = "La recette";

  changeVisible(){
    this.visible = !this.visible;
    if (!this.visible){
      this.btnText = "La recette";
    } else {
      this.btnText = "Les images"
    }
  }
  show() {
    this.recetteVisible = !this.recetteVisible
  }


  @Input() id : any
  @Input() name : any
  @Input() type : any
  @Input() description: any
  @Input() photo : any
  @Input() ingredients: any

  showRecipe() {
    this.readRecipe = !this.readRecipe;
  }
  deleteRecipe(id:any){

    this.rs.deleteRecipe(id)
    console.log(id)
  }

}
