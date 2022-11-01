import React from 'react';

export const mainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  return <mainContext.Provider>{children}</mainContext.Provider>;
};

export default MainContextProvider;
