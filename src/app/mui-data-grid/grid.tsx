import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { contacts } from "@/data/contacts";

const columns: GridColDef<(typeof contacts)[number]>[] = [
    {
        field: "id",
        headerName: "ID",
        width: 90,
    },
    {
        field: "name.first",
        headerName: "First name",
        width: 150,
        editable: true,
        valueGetter: (_, row) => row.name.first,
        valueSetter: (text, row) => {
            return {
                ...row,
                name: {
                    ...row.name,
                    first: text,
                },
            };
        },
    },
    {
        field: "name.last",
        headerName: "Last name",
        width: 150,
        editable: true,
        valueGetter: (_, row) => row.name.last,
        valueSetter: (text, row) => {
            return {
                ...row,
                name: {
                    ...row.name,
                    last: text,
                },
            };
        },
    },
];

export default function SampleDataGrid() {
    const [rows] = useState(contacts);

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
