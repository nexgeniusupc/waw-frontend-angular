import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/services/auth.service";
import { User } from "../auth/model/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login();
    this.user = this.authService.getUser();
  }
}
