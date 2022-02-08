import {Box, IconButton, Tooltip} from "@mui/material";
import {blue, grey, red} from "@mui/material/colors";
import {useEffect, useRef, useState} from "react";
import {useStateRef} from "../../app/hooks/useStateRef";
import {useTranslation} from "react-i18next";
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveIcon from '@mui/icons-material/Remove';

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
    const ref = useRef();

    const color = blue[200];
    const bgColor = grey[50];
    const colorClose = red[300];

    const [isDragged, setIsDragged, isDraggedRef] = useStateRef(false);
    const [mouseDownPosition, setMouseDownPosition] = useState({x: 0, y: 0})

    const [width] = useState(w);
    const [height] = useState(h);

    const [left, setLeft] = useState(x);
    const [top, setTop] = useState(y);

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
            setLeft(e.clientX - offsetXRef.current);
            setTop(e.clientY - offsetYRef.current);
        }
    }

    return (
      <>
          <Box
              ref={ref}
              sx={{
                  position: "absolute",
                  zIndex: 1,
                  top: top,
                  left: left,
                  minWidth: width,
                  minHeight: height,
                  borderRadius: "10px",
                  backgroundColor: bgColor
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