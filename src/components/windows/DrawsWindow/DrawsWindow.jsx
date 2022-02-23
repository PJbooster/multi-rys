import {Box} from "@mui/material";
import DataList from "./DataList";

export default function DrawsWindow() {
    return (
        <>
            <Box sx={{ height: "570px", width: '100%' }}>
                <DataList />
            </Box>
        </>
    );
}