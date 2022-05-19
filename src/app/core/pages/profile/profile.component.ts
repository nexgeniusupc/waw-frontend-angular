import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Project, User } from "src/app/auth/model/user";
import { AuthService } from "src/app/auth/services/auth.service";
import { ProjectsService } from "src/app/auth/services/projects.service";
import { Nullable } from "src/app/common/utils/types";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: Nullable<User> = null;
  projects: Project[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.user.subscribe(user => {
        this.user = user;
      })
    );
    if (this.user === null) {
      this.router.navigate(["/account/signin"]);
      return;
    }
    this.subscriptions.push(
      this.projectsService.getByUser(this.user.id).subscribe(projects => {
        this.projects = projects;
      })
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
