import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { ColDef } from "ag-grid-community";
import { Contact, contacts } from "@/data/contacts";
import { useState } from "react";

const columns: ColDef<Contact>[] = [
    { field: "id" },
    { field: "name.first" },
    { field: "name.last" },
];

export default function SampleAgGrid() {
    const [cols] = useState(columns);
    const [rows] = useState(contacts);

    return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact rowData={rows} columnDefs={cols} />
        </div>
    );
}
