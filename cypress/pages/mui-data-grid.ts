import { CyMuiDataGrid } from "../components/mui-data-grid";

export class MuiDataGridPage {
    open() {
        return cy.visit("/mui-data-grid");
    }

    grid() {
        return new CyMuiDataGrid();
    }
}
