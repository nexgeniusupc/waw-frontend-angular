import { Component, OnInit } from "@angular/core";
import { Company } from "../../model/company";
import { CompaniesService } from "../../services/companies.service";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.css"],
})
export class CompaniesComponent implements OnInit {
  // currentItem: Partial<Company> = {};
  dataSource: Company[] = [];
  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.companiesService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }
  /*
  createCompany(company: Company) {
    this.companiesService.create(company).subscribe();
  }

  deleteCompany(id: number) {
    this.companiesService.delete(id).subscribe(() => {

    })
  }
  */
}
