import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { Contact, contacts } from "@/data/contacts";

const columns: ColDef<Contact>[] = [
    { field: "id", editable: true },
    { field: "name.first", editable: true },
    { field: "name.last", editable: true },
];

export default function SampleAgGrid() {
    const [rows] = useState(contacts);

    return (
        <div className="ag-theme-quartz" style={{ height: 400, width: "100%" }}>
            <AgGridReact rowData={rows} columnDefs={columns} />
        </div>
    );
}
