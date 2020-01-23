import React, {useContext} from 'react';
import {ViroARScene, ViroMaterials, ViroNode} from 'react-viro';
import Board from './Board';
import {SocketContext} from './context/provider';
import Sticky from './Sticky';

const Game: React.FC = () => {
  const {board} = useContext(SocketContext);
  return (
    <ViroARScene>
      <ViroNode position={[0, 0, -2]}>
        <Board />
        {board.notes && board.notes.map(n => <Sticky key={n.id} {...n} />)}
      </ViroNode>
    </ViroARScene>
  );
};

export default Game;
