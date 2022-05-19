import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UseUser } from "../../hooks/use-user";
import { AuthService } from "../../services/auth.service";
import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SignInComponent extends UseUser implements OnInit, OnDestroy {
  email = "";

  constructor(
    private router: Router,
    authService: AuthService,
    projectsService: ProjectsService
  ) {
    super(authService, projectsService);
  }

  ngOnInit(): void {
    this.handleUserInit(user => {
      if (user) this.router.navigate(["/"]);
    });
  }

  ngOnDestroy(): void {
    this.handleUserDestroy();
  }

  handleLogin() {
    if (this.email.length > 0) {
      this.authService.login(this.email);
    }
  }
}
