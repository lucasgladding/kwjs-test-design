import { CyElement } from "./element";
import { CyGrid, CyGridCol, CyGridRow } from "./grid";

class CyMuiDataGridCol implements CyGridCol {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent
            .chain()
            .find(".MuiDataGrid-cell")
            .eq(this.i + 1);
    }
}

class CyMuiDataGridRow implements CyGridRow {
    constructor(
        private parent: CyElement,
        private i: number,
    ) {}

    chain() {
        return this.parent.chain().find(".MuiDataGrid-row").eq(this.i);
    }

    col(i: number): CyGridCol {
        return new CyMuiDataGridCol(this, i);
    }
}

export class CyMuiDataGrid implements CyGrid {
    chain() {
        return cy.get(".MuiDataGrid-main");
    }

    row(i: number): CyGridRow {
        return new CyMuiDataGridRow(this, i);
    }
}
