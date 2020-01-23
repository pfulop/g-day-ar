import React, {createContext, useState, useEffect} from 'react';
import {addNote, editNote, initSockets} from './index';

export type Note = {
  id: string;
  content: string;
  color: string;
  position: any;
};

export type SocketContextType = {
  board: {
    notes: Note[];
  };
  addNote: (content: string, color: string) => void;
  editNote: (note: Note) => void;
};

const defaultContext: SocketContextType = {
  board: {notes: []},
  addNote,
  editNote,
};

export const SocketContext = createContext(defaultContext);

type Props = {
  children: any;
};
export const SocketProvider = (props: Props) => {
  const [value, setValue] = useState(defaultContext);
  useEffect(() => initSockets({setValue}), []);
  return (
    <SocketContext.Provider value={value}>
      {props.children}
    </SocketContext.Provider>
  );
};
