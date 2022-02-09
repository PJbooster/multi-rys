import Window from "../drag-windows/Window";
import {Box} from "@mui/material";

export default function Board({windows}) {


    return (
        <>
            {windows.map((window, index) => (
                <Box key={`window${index}`}>
                    <window.component />
                </Box>
            ))}
        </>
    );
}