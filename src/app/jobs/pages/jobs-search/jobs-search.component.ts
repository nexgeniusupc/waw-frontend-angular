import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ColumnDefinition } from "src/app/common/model/column-definition";
import { JobOffer } from "../../model/job-offer";
import { JobsService } from "../../services/jobs.service";
import { MatDialog } from "@angular/material/dialog";
import { JobConfirmationDialogComponent } from "../../components/job-confirmation-dialog/job-confirmation-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-jobs-search",
  templateUrl: "./jobs-search.component.html",
  styleUrls: ["./jobs-search.component.css"],
})
export class JobsSearchComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<JobOffer>();
  columns: ColumnDefinition<JobOffer>[] = [
    {
      key: "id",
      label: "ID",
      hidden: true,
      type: "number",
      styles: { cellClassName: "w-24" },
    },
    {
      key: "title",
      label: "Title",
      type: "text",
      styles: {
        cellClassName: "w-64",
        containerClassName: "py-2 pr-4",
      },
    },
    {
      key: "description",
      label: "Description",
      type: "text",
      styles: {
        containerClassName: "py-2 pr-4",
      },
    },
    {
      key: "salaryRange",
      label: "Salary Range",
      type: "text",
      styles: { cellClassName: "w-36" },
    },
  ];
  displayedColumns = [...this.columns.map(item => item.key), "actions"];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private jobsService: JobsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this.jobsService.getAll().subscribe(response => {
      this.dataSource.data = response;
    });
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

  confirmationDialog() {
    this.dialog
      .open(JobConfirmationDialogComponent)
      .afterClosed()
      .subscribe((response: string) => {
        if (response === "accept") {
          this.snackbar.open("You have successfully applied for the job");
          return;
        }
        this.snackbar.open("You have cancelled your application");
      });
  }
}
