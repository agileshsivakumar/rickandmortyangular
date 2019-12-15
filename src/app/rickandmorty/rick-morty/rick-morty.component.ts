import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';
import { RickMorty } from '../model/rick-morty';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent implements OnInit {

  public rickMortys: RickMorty[];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.getRickMorty().subscribe(
      (data: any) => {
        this.rickMortys = data.results;
        console.log(this.rickMortys);
      },
      err => console.error(err),
      () => console.log('done loading rick and morty')
    );
  }

}
