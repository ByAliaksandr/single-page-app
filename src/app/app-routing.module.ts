import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterParts } from './app-routing-path.enum';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: RouterParts.Signup, pathMatch: 'full' },
  { path: RouterParts.Signup, component: SignupComponent },
  { path: RouterParts.Home, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
