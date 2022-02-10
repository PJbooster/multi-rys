import Window from "../drag-windows/Window";
import {Box, Button} from "@mui/material";
import {WINDOWS_GAP} from "../../app/def";

export default function Board({windows, onClose, onMinimalize, onMaximalize}) {
    return (
        <>
            {windows.map((window, index) => (
                <Box key={`window${index}`} hidden={window.hidden}>
                    <Window
                        y={index*WINDOWS_GAP}
                        x={index*WINDOWS_GAP}
                        onClose={() => onClose(window.id)}
                        onMinimalize={() => onMinimalize(window.id) }
                        label={window.content.label}
                    >
                        <window.content.component/>
                    </Window>
                </Box>
            ))}

            <Box
                position="relative"
                display="flex"
            >
                {windows.map((window, index) => (
                    <Box
                        key={`tab${index}`}
                        sx={{
                            zIndex: 99,
                            position: "fixed",
                            bottom: 0,
                            left: 5 + (index * 105),
                        }}
                    >
                        <Button
                            sx={{width: "100px"}}
                            variant={"contained"}
                            color={"success"}
                            onClick={() => onMaximalize(window.id)}
                        >
                            Window
                        </Button>
                    </Box>
                ))}
            </Box>
        </>
    );
}