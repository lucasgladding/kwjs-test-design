import { CyElement } from "./element";
import { CyGrid, CyGridCol, CyGridRow } from "./grid";

class CyAgCol implements CyGridCol {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-cell").eq(this.i);
    }
}

class CyAgRow implements CyGridRow {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-row").eq(this.i);
    }

    col(i: number): CyGridCol {
        return new CyAgCol(this, i);
    }
}

export class CyAgGrid implements CyGrid {
    chain() {
        return cy.get(".ag-root");
    }

    row(i: number): CyGridRow {
        return new CyAgRow(this, i);
    }
}
