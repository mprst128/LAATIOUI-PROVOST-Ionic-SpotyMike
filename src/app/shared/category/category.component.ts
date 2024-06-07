import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CategoryComponent{
  categories = ['All', 'R&B', 'Pop', 'Rock'];
  selectedCategory = 'All';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
