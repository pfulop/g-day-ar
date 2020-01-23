import {Dispatch, SetStateAction} from 'react';
import {Note, SocketContextType} from './provider';
import uuid from 'uuid/v4';
type Props = {
  setValue: Dispatch<SetStateAction<SocketContextType>>;
};
type Message = {
  type: string;
  payload: any;
};
export const ws = new WebSocket('ws://10.10.102.146:3000');

export const addNote = (note: string, color: string) =>
  ws.send(message('addNote', {id: uuid(), note, color, position: [0, 0, 0.1]}));

export const editNote = (note: Note) => ws.send(message('editNote', note));

const message = (typ: string, payload?: any) =>
  JSON.stringify({type: typ, payload});

export const initSockets = ({setValue}: Props) => {
  ws.onopen = () => {
    ws.send(message('connect'));
  };
  ws.onmessage = msg => {
    const {type, payload}: Message = JSON.parse(msg.data);
    if (type === 'boardUpdate') {
      console.log('boardUpdate', payload);
      setValue((state: SocketContextType) => {
        return {...state, board: payload};
      });
    }
  };
};
