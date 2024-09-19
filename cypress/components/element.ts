import Chainable = Cypress.Chainable;

export interface CyElement {
    click(): Chainable;
    contains(text: string): Chainable;
}

export class CyBaseElement implements CyElement {
    chain(): Chainable {
        return cy;
    }

    click() {
        return this.chain().click();
    }

    contains(text: string) {
        return this.chain().should("contain.text", text);
    }
}
