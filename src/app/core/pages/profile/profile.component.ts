import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { ProjectsService } from "src/app/auth/services/projects.service";
import { UseUser } from "src/app/auth/hooks/use-user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent extends UseUser implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    authService: AuthService,
    projectsService: ProjectsService
  ) {
    super(authService, projectsService);
  }

  ngOnInit(): void {
    this.handleUserInit(user => {
      if (user === null) {
        this.router.navigate(["/account/signin"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.handleUserDestroy();
  }
}
