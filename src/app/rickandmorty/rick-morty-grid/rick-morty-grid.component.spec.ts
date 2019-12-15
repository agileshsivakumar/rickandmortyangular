import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyGridComponent } from './rick-morty-grid.component';

describe('RickMortyGridComponent', () => {
  let component: RickMortyGridComponent;
  let fixture: ComponentFixture<RickMortyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickMortyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
