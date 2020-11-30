import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycompComponent } from './mycomp/mycomp.component';


const routes: Routes = [
  {path:'mycomp', component: MycompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
