import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero-detail/hero';
import {HeroService} from '../serivces/hero.service';

/* As before, whenever a user clicks on a hero name, t
 * he hero detail appears below the hero list
 * But now the HeroDetailView is presenting those details.
 */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
/*
 * 1. Import the switchMap operator to use later with the route parameters Observable.
 * 2. use the paramMap Observable to extract the id parameter value from the ActivatedRoute service
 * and use the HeroService to fetch the hero with that id
 */
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
