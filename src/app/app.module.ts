import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./core/pages/profile/profile.component";
import { SignInComponent } from "./auth/pages/signin/signin.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";
import { JobsComponent } from "./jobs/pages/jobs/jobs.component";
import { JobsSearchComponent } from "./jobs/pages/jobs-search/jobs-search.component";
import { JobConfirmationDialogComponent } from "./jobs/components/job-confirmation-dialog/job-confirmation-dialog.component";
import { ChangepasswordComponent } from "./auth/pages/changepassword/changepassword.component";
import { ResetpasswordComponent } from "./auth/pages/resetpassword/resetpassword.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";

export const imports: NonNullable<NgModule["imports"]> = [
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    JobsComponent,
    JobsSearchComponent,
    JobConfirmationDialogComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
  ],
  imports: [BrowserModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
