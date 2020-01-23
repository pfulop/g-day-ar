import React from 'react';
import {ViroARScene, ViroBox, ViroMaterials, ViroNode} from 'react-viro';

const Game: React.FC = () => {
  return (
    <ViroARScene>
      <ViroNode>
        <ViroBox
          materials={['green']}
          position={[0, 0, -0.5]}
          scale={[0.5, 0.5, 0.01]}
        />
        <ViroBox position={[0, 0, -0.4]} scale={[0.01, 0.01, 0.01]} />
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
