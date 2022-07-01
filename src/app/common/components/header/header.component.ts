import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UseUser } from "src/app/auth/hooks/use-user";
import { AuthService } from "src/app/auth/services/auth.service";
import { ProjectsService } from "src/app/auth/services/projects.service";
import { MenuItem, NavItem } from "../../model/navigation";
import { ResponsiveService } from "../../services/responsive.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent extends UseUser implements OnInit, OnDestroy {
  navigation: NavItem[] = [
    { label: "Home", path: "/", icon: "home" },
    { label: "Jobs", path: "/account/jobs", icon: "work" },
    { label: "Chat", path: "/chat", icon: "chat" },
    { label: "Notices", path: "/notifications", icon: "notifications" },
  ];
  accountMenuOptions: MenuItem[] = [
    {
      label: "Sign In",
      path: "/account/signin",
      icon: "login",
      visible: () => this.user === null,
    },
    {
      label: "Sign Up",
      path: "/account/signup",
      icon: "person_add_alt_1",
      visible: () => this.user === null,
    },
    ...this.navigation.map<MenuItem>(item => ({
      ...item,
      visible: () => this.user !== null,
    })),
    { separator: true, visible: () => this.user !== null },
    {
      label: "Profile",
      path: "/account/profile",
      icon: "person",
      visible: () => this.user !== null,
    },
    {
      label: "Companies",
      path: "account/companies",
      icon: "apartment",
      visible: () => this.user !== null,
    },
    {
      label: "Settings",
      path: "/account/settings",
      icon: "settings",
      visible: () => this.user !== null,
    },
    {
      label: "Sign Out",
      icon: "logout",
      visible: () => this.user !== null,
      command: () => {
        this.authService.logout();
        this.router.navigate(["/account/signin"]);
      },
    },
  ];
  currentSearch = "";

  constructor(
    authService: AuthService,
    projectsService: ProjectsService,
    private responsiveService: ResponsiveService,
    private router: Router
  ) {
    super(authService, projectsService);
  }

  get breakpoints() {
    return this.responsiveService.breakpoints;
  }

  handleVisibile(value: MenuItem["visible"]): boolean {
    if (!value) return false;
    if (typeof value === "boolean") return value;
    return value();
  }

  handleSearch() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(["/account/search"]);
    }
  }

  ngOnInit(): void {
    this.handleUserInit();
  }

  ngOnDestroy(): void {
    this.handleUserDestroy();
  }
}
