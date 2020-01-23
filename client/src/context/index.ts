import {Dispatch, SetStateAction} from 'react';
import {SocketContextType} from './provider';

type Props = {
  setValue: Dispatch<SetStateAction<SocketContextType>>;
};
type Message = {
  type: string;
  payload: any;
};
const message = (typ: string, payload?: any) =>
  JSON.stringify({type: typ, payload});
export const initSockets = ({setValue}: Props) => {
  const ws = new WebSocket('ws://10.10.102.146:3000');
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
