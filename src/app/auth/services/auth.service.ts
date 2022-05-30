import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BaseService } from "src/app/common/services/base.service";
import { Nullable } from "src/app/common/utils/types";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService<User> {
  private _user = new BehaviorSubject<Nullable<User>>(null);

  constructor(http: HttpClient) {
    super("/users", http);
  }

  get user() {
    return this._user;
  }

  get isLoggedIn() {
    return this._user.value !== null;
  }

  login(email: string) {
    this.fetch<User[]>("get", `${this.endpoint}?email=${email}`).subscribe(
      res => {
        if (res.length !== 1) {
          this._user.next(null);
          return;
        }
        this._user.next(res[0]);
      }
    );
  }

  logout() {
    this._user.next(null);
  }
}
