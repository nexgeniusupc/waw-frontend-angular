import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./core/pages/profile/profile.component";
import { SignInComponent } from "./auth/pages/signin/signin.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";
import { JobsComponent } from "./jobs/pages/jobs/jobs.component";
import { JobsSearchComponent } from "./jobs/pages/jobs-search/jobs-search.component";
import { ResetpasswordComponent } from "./auth/pages/resetpassword/resetpassword.component";
import { ChangepasswordComponent } from "./auth/pages/changepassword/changepassword.component";

const routes: Routes = [
  { path: "", redirectTo: "account/profile", pathMatch: "full" },
  { path: "account/profile", component: ProfileComponent },
  { path: "account/signin", component: SignInComponent },
  { path: "account/signup", component: SignUpComponent },
  { path: "account/jobs", component: JobsComponent },
  { path: "account/search", component: JobsSearchComponent },
  { path: "account/resetpassword", component: ResetpasswordComponent },
  { path: "account/changepassword", component: ChangepasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
