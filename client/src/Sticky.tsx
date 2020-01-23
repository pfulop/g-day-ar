import React from 'react';
import {ViroBox, ViroMaterials, ViroNode, ViroText} from 'react-viro';
import {StyleSheet} from 'react-native';
import {Note} from './context/provider';

const Sticky: React.FC<Note> = props => {
  return (
    <ViroNode
      position={props.position}
      onDrag={a => console.log(a)}
      dragType="FixedToPlane"
      dragPlane={{
        planePoint: [0, 0, -2.8],
        planeNormal: [0, 0, 1],
        maxDistance: 3.2,
      }}>
      <ViroBox
        materials={[props.color]}
        position={[0, 0, 0]}
        scale={[0.2, 0.2, 0.01]}
      />
      <ViroText
        text={props.content}
        style={style.title}
        width={3}
        scale={[0.07, 0.07, 0.07]}
        position={[0, 0, 0.02]}
      />
    </ViroNode>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  green: {
    diffuseTexture: require('./res/green.gif'),
  },
  yellow: {
    diffuseTexture: require('./res/yellow.jpg'),
  },
  red: {
    diffuseTexture: require('./res/red.png'),
  },
});

export default Sticky;
