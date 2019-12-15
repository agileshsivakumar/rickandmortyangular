import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RickMortyGridComponent } from './rick-morty-grid/rick-morty-grid.component';
import { RickMortyComponent } from './rick-morty/rick-morty.component';
import { RickMortyService } from './services/rick-morty.service';

@NgModule({
  declarations: [RickMortyGridComponent, RickMortyComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RickMortyService],
  exports: [RickMortyComponent, RickMortyGridComponent],
  entryComponents: [RickMortyComponent, RickMortyGridComponent]
})
export class RickMortyModule { }
