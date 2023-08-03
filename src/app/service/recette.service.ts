import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  constructor() {}

  recipes = JSON.parse(sessionStorage.getItem('recipes')!);

















  createRecipe(recipe: JSON):any
  {
    if (!sessionStorage.getItem('recipes')){
      let finalRecipe =[{id:1, ...recipe}]
      this.recipes = finalRecipe;
    }else {
      let id = this.recipes.slice(-1)[0]['id']+1;
      this.recipes.push({id: id, ...recipe});
    }
    return sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
  }


readRecipe()
{
    return this.recipes
}

deleteRecipe(ids:any){
    for (let element of this.recipes) {
    if (element.id === ids){
      let indexSupp = this.recipes.indexOf(element)
      this.recipes.splice(indexSupp, 1)
    }
  }
  return sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
}



}
