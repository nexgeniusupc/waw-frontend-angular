import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "waw-frontend-angular";

  constructor(private iconRegistry: MatIconRegistry) {
    iconRegistry.registerFontClassAlias(
      "material-symbols-outlined",
      "material-symbols-outlined"
    );
    iconRegistry.setDefaultFontSetClass("material-symbols-outlined");
  }
}
