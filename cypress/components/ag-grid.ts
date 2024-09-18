import Chainable = Cypress.Chainable;

interface CyElement {
    chain(): Chainable;
}

class CyAgCol implements CyElement {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-cell").eq(this.i);
    }
}

class CyAgRow implements CyElement {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-row").eq(this.i);
    }

    col(i: number) {
        return new CyAgCol(this, i);
    }
}

export class CyAgGrid implements CyElement {
    chain() {
        return cy.get(".ag-root");
    }

    row(i: number): CyAgRow {
        return new CyAgRow(this, i);
    }
}
