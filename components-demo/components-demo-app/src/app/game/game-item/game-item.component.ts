import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface Game {
  title: string;
  price?: number;
  img?: string;
}


@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input("gameData") gameData! : Game;
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("Component destroyed")
  }
  ngOnInit(): void {
    console.log("Item Component Created")
  }
}
