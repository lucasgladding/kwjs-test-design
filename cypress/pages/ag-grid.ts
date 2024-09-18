import { CyAgGrid } from "../components/ag-grid";

export class AgGridPage {
    open() {
        return cy.visit("/ag-grid");
    }

    grid() {
        return new CyAgGrid();
    }
}
