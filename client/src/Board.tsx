import React from 'react';
import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroText,
} from 'react-viro';
import {StyleSheet} from 'react-native';

const Board: React.FC = () => {
  const style = StyleSheet.create({
    title: {
      fontFamily: 'Chalkduster',
      fontSize: 40,
      fontWeight: '400',
      color: '#fff',
      textAlign: 'center',
    },
  });
  return (
    <ViroNode position={[0, 0, 0]}>
      <ViroBox position={[0, 0, 0]} scale={[3, 1.5, 0]} materials={['board']} />
      <ViroNode position={[0, 0.5, 0]} scale={[0.2, 0.2, 0.2]}>
        <ViroText
          text="Keep Doing"
          style={style.title}
          width={3}
          position={[-4.5, 0.2, 0.02]}
        />
        <ViroText
          text="Do Less"
          style={style.title}
          width={3}
          position={[0, 0.2, 0.02]}
        />
        <ViroText
          text="Stop Doing"
          style={style.title}
          width={3}
          position={[4.5, 0.2, 0.02]}
        />
      </ViroNode>

      <ViroBox position={[-0.5, 0, 0]} scale={[0.01, 1.2, 0.01]} />
      <ViroBox position={[0.5, 0, 0]} scale={[0.01, 1.2, 0.01]} />
    </ViroNode>
  );
};

ViroMaterials.createMaterials({
  board: {
    diffuseTexture: require('./res/board.jpg'),
  },
});

export default Board;
