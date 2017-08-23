import { Component, Input } from '@angular/core';
import { Hero } from './hero';

/* As before, whenever a user clicks on a hero name, t
 * he hero detail appears below the hero list
 * But now the HeroDetailView is presenting those details.
 */

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
