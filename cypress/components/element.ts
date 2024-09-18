import Chainable = Cypress.Chainable;

export interface CyElement {
    click(): Chainable;
    contains(text: string): void;
}

export class CyBaseElement implements CyElement {
    chain(): Chainable {
        return cy;
    }

    click() {
        return this.chain().click();
    }

    contains(text: string) {
        this.chain().should("contain.text", text);
    }
}
