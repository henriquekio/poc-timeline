import React, {useState} from 'react';
import TimelineContext from "./TimelineContext";

const TimelineContextProvider = ({children}) => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [offsetScroll, setOffsetScroll] = useState(0);

    return (
        <TimelineContext.Provider value={{
            scrollHeight,
            offsetScroll,
            setScrollHeight: setScrollHeight,
            setOffsetScroll: setOffsetScroll,
        }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineContextProvider;