import Chainable = Cypress.Chainable;

export interface CyElement {
    chain(): Chainable;
}
