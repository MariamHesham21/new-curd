import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css'],
})
export class ItemUpdateComponent implements OnInit {
  item = { id: 0, title: '', body: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.itemService.getItem(id).subscribe((data) => {
      this.item = data;
    });
  }

  updateItem(): void {
    this.itemService.updateItem(this.item.id, this.item).subscribe(() => {
      this.router.navigate(['/']);
      console.log(this.item)

    });
  }
}
