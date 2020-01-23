import React from 'react';
import {ViroARScene, ViroBox, ViroMaterials, ViroNode} from 'react-viro';
import Board from './Board';

const Game: React.FC = () => {
  return (
    <ViroARScene>
      <ViroNode>
        <Board/>
      </ViroNode>
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  green: {
    diffuseTexture: require('./res/grid_bg.jpg'),
    diffuseColor: 'green',
  },
});

export default Game;
