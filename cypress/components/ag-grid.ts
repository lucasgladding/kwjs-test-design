import { CyBaseElement } from "./element";
import { CyGrid, CyGridCell, CyGridRow } from "./grid";

class CyAgGridCell extends CyBaseElement implements CyGridCell {
    constructor(
        private parent: CyBaseElement,
        private i: number,
    ) {
        super();
    }

    chain() {
        return this.parent.chain().find(".ag-cell").eq(this.i);
    }
}

class CyAgGridRow extends CyBaseElement implements CyGridRow {
    constructor(
        private parent: CyBaseElement,
        private i: number,
    ) {
        super();
    }

    chain() {
        return this.parent.chain().find(".ag-row").eq(this.i);
    }

    col(i: number): CyGridCell {
        return new CyAgGridCell(this, i);
    }
}

export class CyAgGrid extends CyBaseElement implements CyGrid {
    chain() {
        return cy.get(".ag-root");
    }

    row(i: number): CyGridRow {
        return new CyAgGridRow(this, i);
    }
}
