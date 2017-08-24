import {Hero} from '../hero-detail/hero';
import {HEROES} from '../mock-heroes';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  /*
   * Like getHeroes(), it also returns a Promise. But this Promise waits
   * two seconds before resolving the Promise with mock heroes.
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
