import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'users',
    component: UsersComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'sigin',
    component: SigninComponent
  },
  {
    path:'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
