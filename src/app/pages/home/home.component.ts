import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items: number[] = [];
  itemsToAdd = 10;

  constructor() {
    this.addItems();
  }

  // 배열에 새로운 아이템 추가
  addItems() {
    const startIndex = this.items.length;
    const endIndex = startIndex + this.itemsToAdd;
    for (let i = startIndex; i < endIndex; i++) {
      this.items.push(i);
    }
  }
}
