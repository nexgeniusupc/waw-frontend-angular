import { Component } from "@angular/core";
import { AuthService } from "../auth/services/auth.service";
import { User } from "../auth/model/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  user: User | null;

  constructor() {
    this.user = AuthService.getCurrentUser();
  }
}
