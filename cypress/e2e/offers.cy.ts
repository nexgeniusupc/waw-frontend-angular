import user from "../fixtures/user.json";
import offer from "../fixtures/offer.json";

describe("Offers", () => {
  const email = user[0].email;

  beforeEach(() => {
    cy.intercept("get", `http://localhost:8080/users?email=${email}`, user).as(
      "getUser"
    );

    cy.visit("/account/signin");
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="submit"]').click();

    cy.wait("@getUser");
  });

  it("should create a new offer", () => {
    cy.get('[ng-reflect-router-link="/account/jobs"]').click();
    cy.url().should("include", "/account/jobs");

    cy.intercept("get", "http://localhost:8080/jobs", []).as(
      "initialGetOffers"
    );
    cy.wait("@initialGetOffers");

    cy.intercept("post", "http://localhost:8080/jobs", offer);

    cy.get('input[name="title"]').type(offer.title, { force: true });
    cy.get('input[name="description"]').type(offer.description, {
      force: true,
    });
    cy.get('input[name="salaryRange"]').type(offer.salaryRange, {
      force: true,
    });
    if (offer.published) {
      cy.get("label").contains("Published").click();
    }

    cy.get('button[type="submit"]').click();

    cy.contains("The offer has been added successfully");
    cy.get("table").contains(offer.title);
  });
});
