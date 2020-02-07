import React, {useState} from 'react';
import TimelineContext from "./TimelineContext";

const TimelineContextProvider = ({children}) => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    return (
        <TimelineContext.Provider value={{
            scrollHeight,
            scrollTop,
            setScrollHeight: setScrollHeight,
            setScrollTop: setScrollTop,
        }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineContextProvider;