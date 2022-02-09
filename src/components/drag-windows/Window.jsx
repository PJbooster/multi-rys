import {Box, IconButton, Tooltip} from "@mui/material";
import {blue, grey, red} from "@mui/material/colors";
import {useEffect, useRef, useState} from "react";
import {useStateRef} from "../../app/hooks/useStateRef";
import {useTranslation} from "react-i18next";
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveIcon from '@mui/icons-material/Remove';
import {GLOBAL_EDGES_GAP, INITIAL_WINDOWS_GAP} from "../../app/def";

export default function Window
    ({
         label = "Window",
         x = 100,
         y = 100,
         w = 800,
         h = 400,
         children,
         onClose = () => {},
         onMinimalize = () => {}
    }) {

    const {t} = useTranslation();

    const color = blue[200];
    const bgColor = grey[50];
    const borderColor = grey[300];
    const colorClose = red[300];

    const [isDragged, setIsDragged, isDraggedRef] = useStateRef(false);
    const [mouseDownPosition, setMouseDownPosition] = useState({x: 0, y: 0})

    const [width] = useState(w);
    const [height] = useState(h);

    const [left, setLeft] = useState(x + INITIAL_WINDOWS_GAP);
    const [top, setTop] = useState(y + INITIAL_WINDOWS_GAP);

    const [, setOffsetX, offsetXRef] = useStateRef(0);
    const [, setOffsetY, offsetYRef] = useStateRef(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => handleMouseMove(e));
        window.addEventListener("mouseup", (e) => handleMouseUp(e));
    }, [])

    useEffect(() => {
        setOffsetX(mouseDownPosition.x - left);
        setOffsetY(mouseDownPosition.y - top);
    }, [isDragged])

    const handleMouseDown = (e) => {
        setIsDragged(true);
        setMouseDownPosition({x: e.clientX, y: e.clientY});
    }
    const handleMouseUp = (e) => {
        setIsDragged(false);
    }

    const handleMouseMove = (e) => {
        if (isDraggedRef.current) {
            let reLeft = e.clientX - offsetXRef.current;
            let reTop = e.clientY - offsetYRef.current;

            const innerHeight = window.innerHeight;
            const innerWidth = window.innerWidth;

            if (reLeft + width + GLOBAL_EDGES_GAP > innerWidth) {
                setLeft(innerWidth - width - GLOBAL_EDGES_GAP);
            }
            else if (reLeft < GLOBAL_EDGES_GAP) {
                setLeft(GLOBAL_EDGES_GAP);
            }
            else {
                setLeft(reLeft);
            }

            if (reTop + height + GLOBAL_EDGES_GAP > innerHeight) {
                setTop(innerHeight - height - GLOBAL_EDGES_GAP);
            }
            else if (reTop < GLOBAL_EDGES_GAP) {
                setTop(GLOBAL_EDGES_GAP);
            }
            else {
                setTop(reTop);
            }
        }
    }

    return (
      <>
          <Box
              sx={{
                  position: "absolute",
                  zIndex: 1,
                  top: top,
                  left: left,
                  minWidth: width,
                  minHeight: height,
                  borderRadius: "10px",
                  backgroundColor: bgColor,
                  border: `1px solid ${borderColor}`,
              }}
          >
              <Box
                  sx={{
                      display: 'flex',
                      width: "100%",
                      backgroundColor: color,
                      borderRadius: "10px 10px 0 0"
                  }}
                  onMouseDown={(e) => handleMouseDown(e)}
                  onMouseUp={(e) => handleMouseUp(e)}
              >
                  <Box
                      sx={{
                          marginRight: "5px",
                          flexGrow: 1
                      }}
                  >
                      <Box sx={{margin: 1}}>
                          {label}
                      </Box>
                  </Box>
                  <Box
                      sx={{
                          marginRight: "5px"
                      }}
                  >
                      <Tooltip
                          title={t("minimalize")}
                          placement="right-start"
                          arrow
                      >
                          <IconButton
                              size="small"
                              onClick={onMinimalize}
                          >
                              <RemoveIcon/>
                          </IconButton>
                      </Tooltip>
                  </Box>

                  <Box
                      sx={{
                          marginRight: "5px"
                      }}
                  >
                      <Tooltip
                          title={t("close")}
                          placement="right-start"
                          arrow
                      >
                          <IconButton
                              size="small"
                              sx={{
                                  marginLeft: 1
                              }}
                              onClick={onClose}
                          >
                              <CancelIcon sx={{color: colorClose}}/>
                          </IconButton>
                      </Tooltip>
                  </Box>
              </Box>
              <Box sx={{margin: 2}}>
                  {children}
              </Box>
          </Box>
      </>
    );
}