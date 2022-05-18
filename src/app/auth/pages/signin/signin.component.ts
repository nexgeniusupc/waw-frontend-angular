import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Nullable } from "src/app/common/utils/types";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SignInComponent implements OnInit, OnDestroy {
  email = "";
  subscription: Nullable<Subscription> = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe(user => {
      if (user) {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleLogin() {
    if (this.email.length > 0) {
      this.authService.login(this.email);
    }
  }
}
