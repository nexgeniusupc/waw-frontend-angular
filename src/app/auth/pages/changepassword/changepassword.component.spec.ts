import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChangepasswordComponent } from "./changepassword.component";

import { imports } from "src/app/app.module";

describe("ChangepasswordComponent", () => {
  let component: ChangepasswordComponent;
  let fixture: ComponentFixture<ChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...imports],
      declarations: [ChangepasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
