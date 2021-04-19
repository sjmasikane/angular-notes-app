import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
//import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {NoteService} from './Note.service';
const routes: Routes = [
  {path:'create', component:CreateComponent},
  //{path:'edit/:id', component:EditComponent},
  {path:'list', component:ListComponent},
  {path:'', redirectTo:'list', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
