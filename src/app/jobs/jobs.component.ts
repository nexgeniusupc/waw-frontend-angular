import { Component, OnInit, ViewChild } from "@angular/core";
import { JobOffer } from "./model/jobOffer";
import { NgForm } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import * as _ from "lodash";
import { JobsService } from "./services/jobs.service";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"],
})
export class JobsComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "title",
    "description",
    "salaryRange",
    "actions",
  ];
  @ViewChild("jobOfferForm", { static: true })
  jobOfferForm!: NgForm;
  jobOfferData: JobOffer;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;
  constructor(private jobsService: JobsService) {
    this.jobOfferData = {} as JobOffer;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllOffers();
  }
  getAllOffers() {
    this.jobsService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  editItem(element: any) {
    this.jobOfferData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit() {
    this.isEditMode = false;
    this.jobOfferForm.resetForm();
  }

  deleteItem(id: string) {
    this.jobsService.deleteItem(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
      console.log(this.dataSource.data);
    });
  }
}
