import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchpropertyComponent } from './searchproperty/searchproperty.component';

const routes: Routes = [
  {path: '', redirectTo: 'searchproperty', pathMatch: 'full'},
  {path:'searchproperty', component: SearchpropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
