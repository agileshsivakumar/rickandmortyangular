import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RickMortyModule } from './rickandmorty/rick-morty.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RickMortyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
