import {Box, Button, ButtonGroup, IconButton, Tooltip} from "@mui/material";
import {ITEMS_NAV} from "../../app/def";
import {useEffect, useRef, useState} from "react";
import {useTool} from "../../app/hooks/useTool";
import { blue } from '@mui/material/colors';
import {useTranslation} from "react-i18next";

export default function Toolbar({openWindow = () => {}}) {

    const {t} = useTranslation();

    const [option, setOption] = useState(1);
    let toolPanel = useTool(option);

    const color = blue[200];
    const colorHover = blue[500];

    const handleSetOption = (index) => {
        setOption(index);
    }

    return (
        <>
            <Box
                position="relative"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        zIndex: 99,
                        position: "absolute",
                        top: 20,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        margin: "auto"
                    }}
                >
                    <Box>
                        <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                            {ITEMS_NAV.map((item, index) => (
                                <Button
                                    key={`item${index}`}
                                    color={ index === option ? "secondary" : "primary"}
                                    onClick={() => handleSetOption(index)}
                                >
                                    {t(item.label)}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box
                    justifyContent="left"
                    alignItems="left"
                    sx={{
                        zIndex: 99,
                        position: "absolute"
                    }}
                >
                    {toolPanel.toolPanel.map((tool, index) => (
                        <Box
                            key={`tool${index}`}
                        >
                            <Tooltip
                                title={t(tool.label)}
                                placement="right-start"
                                arrow
                            >
                                <IconButton
                                    size="large"
                                    sx={{
                                        margin: "10px",
                                        backgroundColor: color,
                                        ":hover": {
                                            backgroundColor: colorHover
                                        }
                                    }}
                                    onClick={() => openWindow(tool)}
                                >
                                    <tool.icon/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}