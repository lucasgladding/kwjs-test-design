import Chainable = Cypress.Chainable;

export interface CyGridCol {
    chain(): Chainable;
}

export interface CyGridRow {
    col(i: number): CyGridCol;
}

export interface CyGrid {
    row(i: number): CyGridRow;
}
