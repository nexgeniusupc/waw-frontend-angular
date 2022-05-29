import { Component, OnInit } from "@angular/core";
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: "app-jobs-search",
  templateUrl: "./jobs-search.component.html",
  styleUrls: ["./jobs-search.component.css"],
})
export class JobsSearchComponent implements OnInit {
  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.getAll();
  }
}
