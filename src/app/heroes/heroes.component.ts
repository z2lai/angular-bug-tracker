import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'bt-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
