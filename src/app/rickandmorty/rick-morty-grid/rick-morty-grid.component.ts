import { Component, Input } from '@angular/core';
import { RickMorty } from '../model/rick-morty';

@Component({
  selector: 'app-rick-morty-grid',
  templateUrl: './rick-morty-grid.component.html',
  styleUrls: ['./rick-morty-grid.component.scss']
})
export class RickMortyGridComponent {

  @Input() rickMorty: RickMorty;

  public getDateYear(dateString: string) {
    const createdDate = new Date(dateString);
    return (new Date()).getFullYear() - createdDate.getFullYear() + ' years ago';
  }

}
