import Toolbar from "./Toolbar";
import Board from "./Board";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function ApplicationContent() {

    const [windows, setWindows] = useState([]);
    const [tabs, setTabs] = useState([]);

    const handlePushWindow = (window) => {
        const wrapper = {
            hidden: false,
            content: window,
            id: uuidv4()
        }
        console.log(wrapper);
        setWindows(oldWindows => [...oldWindows, wrapper]);
    }

    const handleClose = (uuid) => {
        console.log(uuid);
        setWindows(windows.filter(window => {return window.id !== uuid} ));
        console.log(windows)
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

    return (
      <>
          <Toolbar openWindow={handlePushWindow} />
          <Board
              windows={windows}
              onClose={handleClose}
              onMinimalize={handleMinimalize}
              onMaximalize={handleMaximalize}
          />
      </>
    );
}