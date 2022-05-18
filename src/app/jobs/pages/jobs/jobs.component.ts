import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ColumnDefinition } from "src/app/common/model/column-definition";
import { JobOffer } from "../../model/job-offer";
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"],
})
export class JobsComponent implements OnInit, AfterViewInit {
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
  displayedColumns = [...this.columns.map(item => item.key), "actions"];

  @ViewChild("jobsForm", { static: false })
  jobsForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private jobsService: JobsService) {}

  get isEditMode() {
    return !!this.currentItem.id;
  }

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  startEdit(item: JobOffer) {
    this.currentItem = { ...item };
  }

  cancelEdit() {
    this.currentItem = {};
    this.jobsForm.resetForm();
  }

  createJob(item: JobOffer) {
    this.jobsService.create(item).subscribe(response => {
      this.dataSource.data = [...this.dataSource.data, response];
    });
  }

  getAll() {
    this.jobsService.getAll().subscribe(response => {
      this.dataSource.data = response;
    });
  }

  deleteJob(id: number) {
    this.jobsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        current => current.id !== id
      );
    });
  }

  updateJob(id: number, item: JobOffer) {
    this.jobsService.update(id, item).subscribe(response => {
      this.dataSource.data = this.dataSource.data.map(current => {
        if (current.id === id) return response;
        return current;
      });
    });
  }

  handleSubmit() {
    console.log("handling submit...");
    if (!this.jobsForm.form.valid) return;
    console.log("passed validation...");
    const job = this.currentItem as JobOffer;
    if (this.isEditMode) {
      console.log("sending update...");
      this.updateJob(job.id, job);
    } else {
      console.log("sending create...");
      this.createJob(job);
    }
    this.cancelEdit();
    console.log("finished...");
  }

  getDisplayableColumn(item: JobOffer, column: ColumnDefinition<JobOffer>) {
    const value = item[column.key];
    if (column.type === "toggle") {
      return (value ? column.trueLabel : column.falseLabel) || value;
    }
    if (column.type === "dropdown") {
      const match = column.options.find(i => i.value === value);
      return match?.label || value;
    }
    return value;
  }

  useMatFormField(field: ColumnDefinition<JobOffer>) {
    return !field.hidden && ["text", "number", "dropdown"].includes(field.type);
  }
}
