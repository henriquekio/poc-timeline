import React from 'react';

export default React.createContext({
    scrollHeight: 0,
    offsetScroll: 0,
    setScrollHeight: () => {},
    setOffsetScroll: () => {},
});