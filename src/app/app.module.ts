import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";

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
import { MatMenuModule } from "@angular/material/menu";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./core/pages/profile/profile.component";
import { SignInComponent } from "./auth/pages/signin/signin.component";
import { SignUpComponent } from "./auth/pages/signup/signup.component";
import { JobsComponent } from "./jobs/pages/jobs/jobs.component";
import { HeaderComponent } from "./common/components/header/header.component";

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
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    JobsComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
