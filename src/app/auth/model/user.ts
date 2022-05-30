export interface UserImage {
  href: string;
  alt?: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  timestamp: number;
  href?: string;
  image?: UserImage;
}

export interface User {
  id: number;
  preferredName: string;
  fullName: string;
  email: string;
  location: string;
  profileViews: number;
  biography: string;
  about: string;
  cover?: UserImage;
  picture?: UserImage;
}
