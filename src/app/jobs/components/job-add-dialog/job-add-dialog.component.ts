import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { ColumnDefinition } from "../../../common/model/column-definition";
import { JobOffer } from "../../model/job-offer";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: "app-job-add-dialog",
  templateUrl: "./job-add-dialog.component.html",
  styleUrls: ["./job-add-dialog.component.css"],
})
export class JobAddDialogComponent implements OnInit {
  currentItem: Partial<JobOffer> = {};
  dataSource = new MatTableDataSource<JobOffer>();

  columns: ColumnDefinition<JobOffer>[] = [
    { key: "id", label: "ID", hidden: true, type: "number" },
    {
      key: "title",
      label: "Title",
      type: "text",
      required: true,
      styles: {
        cellClassName: "w-56",
        containerClassName: "py-2 pr-4",
      },
    },
    {
      key: "description",
      label: "Description",
      type: "text",
      styles: {
        cellClassName: "w-96",
        containerClassName: "py-2 pr-4",
      },
    },
    { key: "salaryRange", label: "Salary Range", type: "text", required: true },
    {
      key: "published",
      label: "Published",
      type: "toggle",
      trueLabel: "Published",
      falseLabel: "Unpublished",
    },
  ];
  @ViewChild("jobsForm", { static: false })
  jobsForm!: NgForm;

  constructor(
    public dialogRef: MatDialogRef<JobAddDialogComponent>,
    private jobsService: JobsService,
    @Inject(MAT_DIALOG_DATA) public editData: JobOffer
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    console.log(this.editData);
    if (this.editData) {
      this.jobsForm.form.controls["title"].setValue(this.editData.title);
      this.jobsForm.form.controls["description"].setValue(
        this.editData.description
      );
      this.jobsForm.form.controls["salaryRange"].setValue(
        this.editData.salaryRange
      );
      this.jobsForm.form.controls["published"].setValue(
        this.editData.published
      );
    }
  }

  useMatFormField(field: ColumnDefinition<JobOffer>) {
    return !field.hidden && ["text", "number", "dropdown"].includes(field.type);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createJob(item: JobOffer) {
    this.jobsService.create(item).subscribe(response => {
      this.dataSource.data = [...this.dataSource.data, response];
    });
  }

  cancelEdit() {
    this.currentItem = {};
    this.jobsForm.resetForm();
    this.dialogRef.close();
  }

  handleSubmit() {
    console.log("handling submit...");
    if (!this.jobsForm.form.valid) return;
    console.log("passed validation...");
    const job = this.currentItem as JobOffer;

    console.log("sending create...");
    this.createJob(job);

    this.cancelEdit();
    console.log("finished...");
  }
}
