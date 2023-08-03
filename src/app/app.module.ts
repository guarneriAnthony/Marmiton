import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipFormComponent } from './recip-form/recip-form.component';
import { FormsModule } from "@angular/forms";
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RecipContentComponent } from './recip-content/recip-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DetailCardComponent,
    RecipFormComponent,
    ListRecipeComponent,
    RecipContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
