it("renders a button", () => {
  // visit button story
  cy.visit(
    "http://localhost:6006/iframe.html?id=test-button--primary&viewMode=story"
  );

  // get the button
  cy.get('[data-cy="gray-button"]')
    .should("have.css", "color", "rgb(23, 23, 23)")
    .click()
    .should("have.css", "color", "rgb(255, 255, 255)");

  expect(true);
});
