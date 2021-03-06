import Toolbar from "./Toolbar";
import Board from "./Board";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Alert, Snackbar} from "@mui/material";
import {useTranslation} from "react-i18next";
import FocusWindowManager from "../managers/FocusWindowManager";

export default function ApplicationContent() {

    const {t} = useTranslation();

    const [windows, setWindows] = useState([]);
    const [openErrorToast, setOpenErrorToast] = useState(false);

    const handlePushWindow = (window) => {
        if (windows.length >= 10) {

            let copyArray = [...windows];
            for (let i = 0; i < copyArray.length; i++) {
                if (copyArray[i].content === null) {
                    copyArray[i].content = window;

                    setWindows(copyArray);
                    return
                }
            }
            setOpenErrorToast(true);
            return
        }

        const wrapper = {
            hidden: false,
            closed: true,
            content: window,
            zIndex: 1,
            id: uuidv4()
        }

        setWindows(oldWindows => [...oldWindows, wrapper]);
    }

    const handleClose = (uuid) => {
        setWindows(windows.map(window => {
            if (window.id === uuid) {
                window.content = null;
            }
            return window
        }));
    }

    const handleHidden = (uuid, isHidden) => {
        return windows.map(window => {
            if (window.id === uuid) {
                window.hidden = isHidden;
            }
            return window
        })
    }

    const handleMinimalize = (uuid) => {
        setWindows(handleHidden(uuid, true));
    }

    const handleMaximalize = (uuid) => {
        setWindows(handleHidden(uuid, false));
    }

    const handleCloseToast = () => {
        setOpenErrorToast(false);
    }

    return (
      <>
          <Snackbar open={openErrorToast} autoHideDuration={6000} onClose={handleCloseToast} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
              <Alert onClose={handleCloseToast} severity="error" sx={{ width: '100%' }}>
                  {t('error_messages.max_10_windows')}
              </Alert>
          </Snackbar>
          <Toolbar openWindow={handlePushWindow} />
          <Board
              windows={windows}
              onClose={handleClose}
              onMinimalize={handleMinimalize}
              onMaximalize={handleMaximalize}
          />

          {/*Application managers. */}
          <FocusWindowManager />
      </>
    );
}