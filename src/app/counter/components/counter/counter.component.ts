import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increasyBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasyBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increasyBy(t: number): void {
    this.counter +=t;
  }
  reset(): void {
    this.counter=10;
  }

  constructor() { }

}
