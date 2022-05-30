import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "src/app/common/services/base.service";
import { Project } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class ProjectsService extends BaseService<Project> {
  constructor(http: HttpClient) {
    super("/projects", http);
  }

  getByUser(userId: number) {
    return this.fetchAll(`${this.endpoint}?userId=${userId}`);
  }
}
