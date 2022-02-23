import {useStateRef} from "../../app/hooks/useStateRef";
import {useEffect} from "react";
import eventBus, {WINDOW_FOCUS_APPLY_EVENT, WINDOW_FOCUS_EVENT} from "../../app/eventBus/eventBus";

export default function FocusWindowManager() {

    const [, setZIndex, zIndexRef] = useStateRef(1);

    useEffect(() => {
        eventBus.on(WINDOW_FOCUS_EVENT, (data) => handleWindowFocusEvent(data.id))
    }, [])

    const handleWindowFocusEvent = (uuid) => {
        let newIndex = zIndexRef.current + 1;
        setZIndex(newIndex);

        eventBus.dispatch(WINDOW_FOCUS_APPLY_EVENT, {id: uuid, zIndex: newIndex});
    }

    return (<></>);
}