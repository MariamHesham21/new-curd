import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderListComponent } from './render-list/render-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemUpdateComponent } from './item-update/item-update.component';

const routes: Routes = [
  { path: '', component: RenderListComponent },
  { path: 'home', component: RenderListComponent },
  { path: 'create', component: ItemCreateComponent },
  { path: 'update/:id', component: ItemUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
