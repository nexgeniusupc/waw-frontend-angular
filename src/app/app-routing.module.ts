import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResetpasswordComponent } from "./auth/pages/resetpassword/resetpassword.component";
import { ChangepasswordComponent } from "./auth/pages/changepassword/changepassword.component";

const routes: Routes = [
  { path: "", redirectTo: "account/profile", pathMatch: "full" },
  { path: "account/resetpassword", component: ResetpasswordComponent },
  { path: "account/changepassword", component: ChangepasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
