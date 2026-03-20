import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPersonComponent } from './list-person/list-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

const routes: Routes = [
  { path: '', component: ListPersonComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}