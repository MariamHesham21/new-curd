import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent {
  item = { title: '', body: '' };

  constructor(private itemService: ItemService, private router: Router) {}

  createItem(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior

    this.itemService.createItem(this.item).subscribe({
      next: (data) => {
        console.log(data)
        // this.router.navigate(['/']);
      },
      error: (error) => {
        console.log('this is error', error);
      },
    });
  }
}
