import Toolbar from "./Toolbar";
import Board from "./Board";
import {useState} from "react";

export default function ApplicationContent() {

    const [windows, setWindows] = useState([]);

    const handlePushWindow = (window) => {
        console.log('lul')
        setWindows(oldWindows => [...oldWindows, window]);
    }
    return (
      <>
          <Toolbar openWindow={handlePushWindow} />
          <Board windows={windows} />
      </>
    );
}