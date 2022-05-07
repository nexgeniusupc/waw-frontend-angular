import { User } from "../model/user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  static user: User = {
    preferredName: "John",
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    location: "Lima, Peru",
    profileViews: 367,
    biography:
      "Freelance UX/UI designer, 80+ projects in Web, Mobile (Android & iOS) and creative projects. Open to offers.",
    about:
      "I'm more experienced in e-commerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.",
  };
  static loggedIn: boolean = true;

  constructor() {}

  static login(): void {
    this.loggedIn = true;
  }

  static logout(): void {
    this.loggedIn = false;
  }

  static getCurrentUser(): User | null {
    if (this.loggedIn) {
      return this.user;
    }
    return null;
  }
}
