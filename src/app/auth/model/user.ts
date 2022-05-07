export interface UserImage {
  href: string;
  alt?: string;
}

export interface UserProject {
  title: string;
  summary: string;
  timestamp: number;
  href?: string;
  image?: UserImage;
}

export interface User {
  preferredName: string;
  fullName: string;
  email: string;
  location: string;
  profileViews: number;
  biography: string;
  about: string;
  projects: UserProject[];
  cover?: UserImage;
  picture?: UserImage;
}
