import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./auth/pages/signin/signin.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";
import { JobsComponent } from "./jobs/pages/jobs/jobs.component";

const routes: Routes = [
  { path: "", redirectTo: "account/profile", pathMatch: "full" },
  { path: "account/profile", component: ProfileComponent },
  { path: "account/signin", component: SignInComponent },
  { path: "account/signup", component: SignUpComponent },
  { path: "account/jobs", component: JobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
