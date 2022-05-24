import { Subscription } from "rxjs";
import { Project, User } from "src/app/auth/model/user";
import { AuthService } from "src/app/auth/services/auth.service";
import { ProjectsService } from "src/app/auth/services/projects.service";
import { Nullable } from "src/app/common/utils/types";

export type UserSubscriptionHandler = (user: Nullable<User>) => void;

export class UseUser {
  user: Nullable<User> = null;
  projects: Project[] = [];
  private userSubscription: Nullable<Subscription> = null;

  constructor(
    protected authService: AuthService,
    protected projectsService: ProjectsService
  ) {}

  protected handleUserInit(): void;
  protected handleUserInit(handler: UserSubscriptionHandler): void;
  protected handleUserInit(handler?: UserSubscriptionHandler) {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.user = user;
      if (user) {
        this.projectsService.getByUser(user.id).subscribe(projects => {
          this.projects = projects;
        });
      }
      if (handler) handler(user);
    });
  }

  protected handleUserDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = null;
    }
  }
}
