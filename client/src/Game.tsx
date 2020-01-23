import React from 'react';
import {ViroARScene, ViroMaterials, ViroNode} from 'react-viro';
import Board from './Board';
import Sticky from './Sticky';

const Game: React.FC = () => {
  return (
    <ViroARScene>
      <ViroNode position={[0, 0, -3]}>
        <Board />
        <Sticky />
      </ViroNode>
    </ViroARScene>
  );
};

export default Game;
