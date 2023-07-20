import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recettes = [
    {

      name : 'Salade Cezar',
      type : 'entrée',
      description : 'Une belle texture ferme et fondante comme un far breton ou un flan pâtissier, avec cette recette facile de clafoutis aux cerises. J’en ai déjà proposé plusieurs comme le clafoutis aux cerises végétal, le clafoutis aux abricots ou encore le clafoutis aux pêches, cette fois-ci c’est à ma soeur que je dois la recette, simple et efficace. Peu d’ingrédients, et un clafoutis bien gourmand.\n',
      photo : 'https://media.istockphoto.com/id/536665840/fr/photo/d%C3%AEner-en-famille.jpg?s=1024x1024&w=is&k=20&c=WgjD2fAnK2ZdBVIMuTiBnER3JgGrwedwDtW42mSgUKw=',
      ingredients : [
        {
          names : 'cerises',
          quantity : "500g"
        },
        {
          names : 'lait',
          quantity : "250g"
        },
        {
          names : 'farine',
          quantity : "180g"
        },
        {
          names : 'poudre d\'amandes',
          quantity : "100g"
        },
        {
          names : 'beurre fondu',
          quantity : "30g (+ 20g pour le dessus) - fonctionne aussi avec huile coco, margarine"
        },
        {
          names : 'sucre blond',
          quantity : "100g"
        },
        {
          names : 'Oeufs',
          quantity : "3"
        },
        {
          names : 'sachet de sucre vanillé',
          quantity : "1 sachet"
        }
      ]
    },
    {
      name : 'entrecot',
      type : 'plat',
      description : 'Une belle texture ferme et fondante comme un far breton ou un flan pâtissier, avec cette recette facile de clafoutis aux cerises. J’en ai déjà proposé plusieurs comme le clafoutis aux cerises végétal, le clafoutis aux abricots ou encore le clafoutis aux pêches, cette fois-ci c’est à ma soeur que je dois la recette, simple et efficace. Peu d’ingrédients, et un clafoutis bien gourmand.\n',
      photo : 'https://media.istockphoto.com/id/536665840/fr/photo/d%C3%AEner-en-famille.jpg?s=1024x1024&w=is&k=20&c=WgjD2fAnK2ZdBVIMuTiBnER3JgGrwedwDtW42mSgUKw=',
      ingredients : [
        {
          names : 'cerises',
          quantity : "500g"
        },
        {
          names : 'lait',
          quantity : "250g"
        },
        {
          names : 'farine',
          quantity : "180g"
        },
        {
          names : 'poudre d\'amandes',
          quantity : "100g"
        },
        {
          names : 'beurre fondu',
          quantity : "30g (+ 20g pour le dessus) - fonctionne aussi avec huile coco, margarine"
        },
        {
          names : 'sucre blond',
          quantity : "100g"
        },
        {
          names : 'Oeufs',
          quantity : "3"
        },
        {
          names : 'sachet de sucre vanillé',
          quantity : "1 sachet"
        }
      ]
    },
    {
      name : 'glace citron',
      type : 'dessert',
      description : 'Une belle texture ferme et fondante comme un far breton ou un flan pâtissier, avec cette recette facile de clafoutis aux cerises. J’en ai déjà proposé plusieurs comme le clafoutis aux cerises végétal, le clafoutis aux abricots ou encore le clafoutis aux pêches, cette fois-ci c’est à ma soeur que je dois la recette, simple et efficace. Peu d’ingrédients, et un clafoutis bien gourmand.\n',
      photo : 'https://media.istockphoto.com/id/536665840/fr/photo/d%C3%AEner-en-famille.jpg?s=1024x1024&w=is&k=20&c=WgjD2fAnK2ZdBVIMuTiBnER3JgGrwedwDtW42mSgUKw=',
      ingredients : [
        {
          names : 'cerises',
          quantity : "500g"
        },
        {
          names : 'lait',
          quantity : "250g"
        },
        {
          names : 'farine',
          quantity : "180g"
        },
        {
          names : 'poudre d\'amandes',
          quantity : "100g"
        },
        {
          names : 'beurre fondu',
          quantity : "30g (+ 20g pour le dessus) - fonctionne aussi avec huile coco, margarine"
        },
        {
          names : 'sucre blond',
          quantity : "100g"
        },
        {
          names : 'Oeufs',
          quantity : "3"
        },
        {
          names : 'sachet de sucre vanillé',
          quantity : "1 sachet"
        }
      ]
    },
    {
      name : 'morito',
      type : 'cocktail',
      description : 'Une belle texture ferme et fondante comme un far breton ou un flan pâtissier, avec cette recette facile de clafoutis aux cerises. J’en ai déjà proposé plusieurs comme le clafoutis aux cerises végétal, le clafoutis aux abricots ou encore le clafoutis aux pêches, cette fois-ci c’est à ma soeur que je dois la recette, simple et efficace. Peu d’ingrédients, et un clafoutis bien gourmand.\n',
      photo : 'https://media.istockphoto.com/id/536665840/fr/photo/d%C3%AEner-en-famille.jpg?s=1024x1024&w=is&k=20&c=WgjD2fAnK2ZdBVIMuTiBnER3JgGrwedwDtW42mSgUKw=',
      ingredients : [
        {
          names : 'cerises',
          quantity : "500g"
        },
        {
          names : 'lait',
          quantity : "250g"
        },
        {
          names : 'farine',
          quantity : "180g"
        },
        {
          names : 'poudre d\'amandes',
          quantity : "100g"
        },
        {
          names : 'beurre fondu',
          quantity : "30g (+ 20g pour le dessus) - fonctionne aussi avec huile coco, margarine"
        },
        {
          names : 'sucre blond',
          quantity : "100g"
        },
        {
          names : 'Oeufs',
          quantity : "3"
        },
        {
          names : 'sachet de sucre vanillé',
          quantity : "1 sachet"
        }
      ]
    }
  ]


}
