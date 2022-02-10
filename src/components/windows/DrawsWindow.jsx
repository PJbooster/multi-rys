import {Box} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Numer losowania', width: 70 },
    { field: 'date', headerName: 'Data', width: 130 },
    { field: 'numbers', headerName: 'Wylosowane numery', flex: 1},
];

const rows = [
    { id: 1123, date: '12-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1124, date: '13-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72" },
    { id: 1125, date: '14-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1126, date: '15-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1127, date: '16-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1128, date: '17-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1129, date: '18-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1130, date: '19-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
    { id: 1131, date: '20-02-2021', numbers: "1, 2, 4, 11, 23, 53, 80, 71, 21, 10, 6, 45, 24, 25, 29, 17, 20, 66, 72"},
];


export default function DrawsWindow() {
    return (
        <>
            <Box sx={{ height: "540px", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                />
            </Box>
        </>
    );
}