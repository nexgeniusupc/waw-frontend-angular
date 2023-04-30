import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./core/pages/profile/profile.component";
import { SignInComponent } from "./auth/pages/signin/signin.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";
import { JobsComponent } from "./jobs/pages/jobs/jobs.component";
import { HeaderComponent } from "./common/components/header/header.component";
import { JobsSearchComponent } from "./jobs/pages/jobs-search/jobs-search.component";
import { JobConfirmationDialogComponent } from "./jobs/components/job-confirmation-dialog/job-confirmation-dialog.component";
import { ChangepasswordComponent } from "./auth/pages/changepassword/changepassword.component";
import { ResetpasswordComponent } from "./auth/pages/resetpassword/resetpassword.component";
import { CompaniesComponent } from "./employers/pages/companies/companies.component";
import { FooterComponent } from "./common/components/footer/footer.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacySlideToggleModule as MatSlideToggleModule } from "@angular/material/legacy-slide-toggle";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";
import { MatLegacyProgressBarModule as MatProgressBarModule } from "@angular/material/legacy-progress-bar";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";

export const imports: NonNullable<NgModule["imports"]> = [
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  LayoutModule,
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
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    JobsComponent,
    HeaderComponent,
    JobsSearchComponent,
    JobConfirmationDialogComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
    FooterComponent,
    CompaniesComponent,
  ],
  imports: [BrowserModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
