import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
visible = false ;
btnText = "La recette";

  @Input() name : any;
  @Input() type : any;
  @Input() description : any;
  @Input() photo : any;
  @Input() ingredients : any;

  changeVisible(){
      this.visible = !this.visible;
      if (!this.visible){
        this.btnText = "La recette";
      } else {
        this.btnText = "Les images"
      }
}
}
