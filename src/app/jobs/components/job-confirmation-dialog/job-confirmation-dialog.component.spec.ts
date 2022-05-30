import { ComponentFixture, TestBed } from "@angular/core/testing";

import { JobConfirmationDialogComponent } from "./job-confirmation-dialog.component";

import { imports } from "src/app/app.module";

describe("JobConfirmationDialogComponent", () => {
  let component: JobConfirmationDialogComponent;
  let fixture: ComponentFixture<JobConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...imports],
      declarations: [JobConfirmationDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
