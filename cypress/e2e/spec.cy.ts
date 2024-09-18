import { CyAgGrid } from "../components/ag-grid";
import { CyMuiDataGrid } from "../components/mui-data-grid";

describe("spec", () => {
    it("cy-ag-grid", () => {
        cy.visit("/ag-grid");

        const grid = new CyAgGrid();

        grid.row(0).col(0).chain().should("contain.text", "1");
        grid.row(0).col(1).chain().should("contain.text", "Lucas");
        grid.row(0).col(2).chain().should("contain.text", "Gladding");

        grid.row(1).col(0).chain().should("contain.text", "2");
        grid.row(1).col(1).chain().should("contain.text", "Margaret");
        grid.row(1).col(2).chain().should("contain.text", "Tavares");
    });

    it("cy-mui-data-grid", () => {
        cy.visit("/mui-data-grid");

        const grid = new CyMuiDataGrid();

        grid.row(0).col(0).chain().should("contain.text", "1");
        grid.row(0).col(1).chain().should("contain.text", "Lucas");
        grid.row(0).col(2).chain().should("contain.text", "Gladding");

        grid.row(1).col(0).chain().should("contain.text", "2");
        grid.row(1).col(1).chain().should("contain.text", "Margaret");
        grid.row(1).col(2).chain().should("contain.text", "Tavares");
    });

    it("ag-grid", () => {
        cy.visit("/ag-grid");

        cy.get(".ag-row").as("rows");

        cy.get("@rows").eq(0).find(".ag-cell").as("cols");
        cy.get("@cols").eq(0).should("contain.text", "1");
        cy.get("@cols").eq(1).should("contain.text", "Lucas");
        cy.get("@cols").eq(2).should("contain.text", "Gladding");

        cy.get("@rows").eq(1).find(".ag-cell").as("cols");
        cy.get("@cols").eq(0).should("contain.text", "2");
        cy.get("@cols").eq(1).should("contain.text", "Margaret");
        cy.get("@cols").eq(2).should("contain.text", "Tavares");
    });

    it("mui", () => {
        cy.visit("/mui-data-grid");

        cy.get(".MuiDataGrid-row").as("rows");

        cy.get("@rows").eq(0).find(".MuiDataGrid-cell").as("cols");
        cy.get("@cols").eq(1).should("contain.text", "1");
        cy.get("@cols").eq(2).should("contain.text", "Lucas");
        cy.get("@cols").eq(3).should("contain.text", "Gladding");

        cy.get("@rows").eq(1).find(".MuiDataGrid-cell").as("cols");
        cy.get("@cols").eq(1).should("contain.text", "2");
        cy.get("@cols").eq(2).should("contain.text", "Margaret");
        cy.get("@cols").eq(3).should("contain.text", "Tavares");
    });
});
