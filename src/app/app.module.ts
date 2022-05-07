import { NgModule, Type, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";

type ImportedModule = Type<any> | ModuleWithProviders<{}> | any[];

export const imports: ImportedModule[] = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, SignUpComponent],
  imports: [BrowserModule, AppRoutingModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
