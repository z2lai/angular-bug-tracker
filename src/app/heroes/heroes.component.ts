import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'bt-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {  
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  hero = { id: 20, name: 'Tornado' };
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
