import React, {createContext, useState, useEffect} from 'react';
import {initSockets} from './index';

export type SocketContextType = {
  board: any;
};
const defaultContext = {
  board: {},
};

export const SocketContext = createContext(defaultContext);

type Props = {
  children: any;
};
export const SocketProvider = (props: Props) => {
  const [value, setValue] = useState<SocketContextType>(defaultContext);
  useEffect(() => initSockets({setValue}), []);
  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};
