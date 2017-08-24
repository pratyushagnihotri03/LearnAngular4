import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero-detail/hero';
import {HeroService} from '../serivces/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  /*
   * Define a heroes array property.
   * Inject the HeroService in the constructor and hold it in a private heroService field.
   * Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
   * In this dashboard you specify four heroes (2nd, 3rd, 4th, and 5th) with the Array.slice method.
   */
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];  // 1. Define a heroes array property.
  /*
   * 2. Inject the HeroService in the constructor and hold it in a private heroService field.
   */
  constructor(private heroService: HeroService) {}

  /*
   * 3. Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
   */
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
