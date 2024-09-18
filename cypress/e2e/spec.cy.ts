import { AgGridPage } from "../pages/ag-grid";
import { MuiDataGridPage } from "../pages/mui-data-grid";

const pages = [
    { name: "ag-grid", page: new AgGridPage() },
    { name: "mui-data-grid", page: new MuiDataGridPage() },
];

describe("spec", () => {
    pages.forEach(({ name, page }) => {
        it(`renders the grid on ${name}`, () => {
            page.open();

            const grid = page.grid();

            grid.row(0).col(0).chain().should("contain.text", "1");
            grid.row(0).col(1).chain().should("contain.text", "Lucas");
            grid.row(0).col(2).chain().should("contain.text", "Gladding");

            grid.row(1).col(0).chain().should("contain.text", "2");
            grid.row(1).col(1).chain().should("contain.text", "Margaret");
            grid.row(1).col(2).chain().should("contain.text", "Tavares");
        });
    });
});
