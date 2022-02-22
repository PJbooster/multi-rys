import Window from "../drag-windows/Window";
import {Box, Button} from "@mui/material";
import {WINDOWS_GAP} from "../../app/def";
import {useTranslation} from "react-i18next";
import {indigo} from "@mui/material/colors";

export default function Board({windows, onClose, onMinimalize, onMaximalize, onFocus}) {

    const {t} = useTranslation();

    const unhiddenTabColor = indigo[100];
    const hiddenTabColor = indigo[500];

    return (
        <>
            {windows.map((window, index) => (
                <Box key={`window${index}`} hidden={window.hidden}>
                    {window.content &&
                        <Window
                            y={index*WINDOWS_GAP}
                            x={index*WINDOWS_GAP}
                            onClose={() => onClose(window.id)}
                            onMinimalize={() => onMinimalize(window.id) }
                            onFocus={() => onFocus(window.id)}
                            zIndex={window.zIndex}
                            label={window.content.label}
                        >
                            <window.content.component/>
                        </Window>
                    }
                </Box>
            ))}

            <Box
                position="relative"
                display="flex"
            >
                {windows.map((window, index) => (
                    <>
                        { window.content &&
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
                                    sx={{width: "100px", backgroundColor: window.hidden ? hiddenTabColor : unhiddenTabColor }}
                                    variant={"contained"}
                                    color={"success"}
                                    onClick={() => onMaximalize(window.id)}
                                >
                                    {t(window.content.label)}
                                </Button>
                            </Box>
                        }
                    </>
                ))}
            </Box>
        </>
    );
}