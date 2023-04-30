describe("My First Test", () => {
  it("Finds the WAW header text in the initial page", () => {
    cy.visit("/");
    cy.contains("WAW");
  });
});
