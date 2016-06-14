import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <div>
            <h2>My Heroes</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
          </div>
          <my-hero-detail [hero]="selectedHero"></my-hero-detail>
          `,
  styleUrls:['./styles.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]  
})

export class AppComponent implements OnInit{
   
    ngOnInit(){
      this.getHeroes();
    }
    
    title: string = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;
    
    constructor(private heroService: HeroService){
    }
    
    getHeroes(){
      this.heroService.getHeroes()
        .then(data => this.heroes = data);
    }
     
    onSelect(hero: Hero){
      return this.selectedHero = hero;
    }
    
 }
