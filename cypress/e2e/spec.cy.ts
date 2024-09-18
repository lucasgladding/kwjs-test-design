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

            grid.row(0).col(0).contains("1");
            grid.row(0).col(1).contains("Lucas");
            grid.row(0).col(2).contains("Gladding");

            grid.row(1).col(0).contains("2");
            grid.row(1).col(1).contains("Gerrie");
            grid.row(1).col(2).contains("Swart");

            grid.row(0).col(1).click().type("Jacob").type("{enter}");
            grid.row(0).col(1).contains("Jacob");
        });
    });
});
