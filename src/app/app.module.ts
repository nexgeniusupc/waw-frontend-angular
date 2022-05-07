import { NgModule, Type, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";

type ImportedModule = Type<any> | ModuleWithProviders<{}> | any[];

export const imports: ImportedModule[] = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
