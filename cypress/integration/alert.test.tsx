import { getResolvedColorPair } from "../../src/util/tools";
import { theme } from "../../src/theme";
import { colord } from "colord";

function testStatusType(query: string, color: string) {
  const toggleModeButtonQuery = '[data-cy="toggle-mode-button"]';

  // get colors
  const [alertLightBg, alertDarkBg] = getResolvedColorPair(`${color}.5`, theme);

  // check that light color is correct
  cy.get(query).should(
    "have.css",
    "background-color",
    colord(alertLightBg).toRgbString()
  );

  // switch modes
  cy.get(toggleModeButtonQuery).click();

  // check that dark color is correct
  cy.get(query).should(
    "have.css",
    "background-color",
    colord(alertDarkBg).toRgbString()
  );

  // switch modes back to original
  cy.get(toggleModeButtonQuery).click();
}

describe("Alert ", () => {
  const alertQueries = {
    error: '[data-cy="alert-error"]',
    success: '[data-cy="alert-success"]',
    warning: '[data-cy="alert-warning"]',
    info: '[data-cy="alert-info"]',
    subtle: '[data-cy="alert-subtle"]',
    solid: '[data-cy="alert-solid"]',
    leftAccent: '[data-cy="alert-left-accent"]',
    topAccent: '[data-cy="alert-top-accent"]',
  };

  beforeEach(() => {
    // visit the alert story
    cy.visit(
      "http://localhost:6006/iframe.html?id=test-alert--primary&viewMode=story"
    );
  });

  it("works with all 'status' types", () => {
    // check on status="error" colors
    testStatusType(alertQueries.error, "red");

    // check on status="success" colors
    testStatusType(alertQueries.success, "green");

    // check on status="warning" colors
    testStatusType(alertQueries.warning, "orange");

    // check on status="info" colors
    testStatusType(alertQueries.info, "blue");
  });
});
