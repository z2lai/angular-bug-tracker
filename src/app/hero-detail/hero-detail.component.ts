import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'bt-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero; 
  // Note: The selectedHero object is passed-by-reference from parent to child and can be modified directly from the child without two-way binding
  // While, test number is passed-by-value from parent to child and thus modifying testInput has no effect on test without two-way binding
  @Input() testInput?: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
