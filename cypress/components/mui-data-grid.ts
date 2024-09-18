import { CyBaseElement } from "./element";
import { CyGrid, CyGridCell, CyGridRow } from "./grid";

class CyMuiDataGridCell extends CyBaseElement implements CyGridCell {
    constructor(
        private parent: CyBaseElement,
        private i: number,
    ) {
        super();
    }

    chain() {
        return this.parent
            .chain()
            .find(".MuiDataGrid-cell")
            .eq(this.i + 1);
    }
}

class CyMuiDataGridRow extends CyBaseElement implements CyGridRow {
    constructor(
        private parent: CyBaseElement,
        private i: number,
    ) {
        super();
    }

    chain() {
        return this.parent.chain().find(".MuiDataGrid-row").eq(this.i);
    }

    col(i: number): CyGridCell {
        return new CyMuiDataGridCell(this, i);
    }
}

export class CyMuiDataGrid extends CyBaseElement implements CyGrid {
    chain() {
        return cy.get(".MuiDataGrid-main");
    }

    row(i: number): CyGridRow {
        return new CyMuiDataGridRow(this, i);
    }
}
