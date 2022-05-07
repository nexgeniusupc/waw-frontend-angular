import { User } from "../model/user";
import { Injectable, Optional, SkipSelf } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: User | null = null;

  constructor(@Optional() @SkipSelf() sharedService?: AuthService) {
    if (sharedService) {
      throw new Error("AuthService is already loaded");
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  login(): void {
    this.user = {
      preferredName: "John",
      fullName: "John Doe",
      email: "john.doe@gmail.com",
      location: "Lima, Peru",
      profileViews: 367,
      biography:
        "Freelance UX/UI designer, 80+ projects in Web, Mobile (Android & iOS) and creative projects. Open to offers.",
      about:
        "I'm more experienced in e-commerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.",
      projects: [
        {
          title: "Zara redisign concept",
          summary: "UX/UI Design",
          timestamp: 1562284800000,
          image: {
            href: "https://unsplash.com/photos/T6fDN60bMWY/download?w=640",
            alt: "Close up photo of black Android smartphone with the word 'design' on the screen",
          },
        },
        {
          title: "SCTHON Event Brand Identity",
          summary: "Graphic Design",
          timestamp: 1553990400000,
          image: {
            href: "https://unsplash.com/photos/v9vII5gV8Lw/download?w=640",
            alt: "Silver iMac, Apple keyboard and tablet showing logos of the Adobe suite of products",
          },
        },
        {
          title: "Dzord Brand Identity",
          summary: "Graphic Design",
          timestamp: 1459728000000,
          image: {
            href: "https://unsplash.com/photos/CGpifH3FjOA/download?w=640",
            alt: "Graphic designer working on a Macbook laptop using a trackpad, color charts and markers",
          },
        },
      ],
      cover: {
        href: "https://unsplash.com/photos/YLSwjSy7stw/download?w=640",
        alt: "Books on a bookshelf",
      },
      picture: {
        href: "https://unsplash.com/photos/YUu9UAcOKZ4/download?w=640",
        alt: "John Doe's profile picture",
      },
    };
  }

  logout(): void {
    this.user = null;
  }

  getUser(): User | null {
    return this.user;
  }
}
