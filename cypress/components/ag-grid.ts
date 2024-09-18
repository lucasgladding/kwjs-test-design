import { CyElement } from "./element";
import { CyGrid, CyGridCell, CyGridRow } from "./grid";

class CyAgGridCell implements CyElement {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-cell").eq(this.i);
    }
}

class CyAgGridRow implements CyGridRow {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".ag-row").eq(this.i);
    }

    col(i: number): CyGridCell {
        return new CyAgGridCell(this, i);
    }
}

export class CyAgGrid implements CyGrid {
    chain() {
        return cy.get(".ag-root");
    }

    row(i: number): CyGridRow {
        return new CyAgGridRow(this, i);
    }
}
