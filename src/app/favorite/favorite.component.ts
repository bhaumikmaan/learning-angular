import { Component, Input, Output, EventEmitter , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('isSelected') isFavorite: boolean = false;
  @Output() change = new EventEmitter() ;

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

  onFavChanged(){
    console.log("Favorite Changed")
  }
}
