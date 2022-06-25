import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Company } from "../../model/company";
import { CompaniesService } from "../../services/companies.service";

@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.css"],
})
export class CompaniesComponent implements OnInit {
  currentCompany: Partial<Company> = {};
  dataSource: Company[] = [];

  @ViewChild("companiesForm", { static: false })
  companiesForm!: NgForm;

  constructor(private companiesService: CompaniesService) {}

  get isEditMode() {
    return !!this.currentCompany.id;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.companiesService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  createCompany(company: Company) {
    this.companiesService.create(company).subscribe(response => {
      this.dataSource = [...this.dataSource, response];
    });
  }

  editCompany(company: Company) {
    this.currentCompany = { ...company };
  }

  cancelEdit() {
    this.currentCompany = {};
    this.companiesForm.resetForm();
  }

  updateCompany(id: number, company: Company) {
    this.companiesService.update(id, company).subscribe(response => {
      this.dataSource = this.dataSource.map(current => {
        if (current.id === id) return response;
        return current;
      });
    });
  }

  deleteCompany(id: number) {
    this.companiesService.delete(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(current => current.id !== id);
    });
  }

  handleSubmit() {
    console.log("handling submit...");
    if (!this.companiesForm.form.valid) return;
    console.log("passed validation...");
    const company = this.currentCompany as Company;
    if (this.isEditMode) {
      console.log("sending update...");
      this.updateCompany(company.id, company);
    } else {
      console.log("sending create...");
      this.createCompany(company);
    }
    this.cancelEdit();
    console.log("finished...");
  }
}
