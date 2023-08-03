import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipFormComponent} from "./recip-form/recip-form.component";
import {ListRecipeComponent} from "./list-recipe/list-recipe.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"formRecipe", component: RecipFormComponent },
  {path: "listRecipe", component: ListRecipeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
