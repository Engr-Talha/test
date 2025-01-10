import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AuthService } from './auth.service';
import { PrivatePageComponent } from './private-page/private-page.component';
const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  {
    path: 'private', component: PrivatePageComponent, canActivate: [AuthService],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
