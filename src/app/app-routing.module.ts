import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";

const routes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "account/signup", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
