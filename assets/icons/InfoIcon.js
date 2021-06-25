import React from 'react';
import {View} from 'react-native';
import SVG, {Path, Circle} from 'react-native-svg';

export const InfoIcon = () => (
  <View>
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.97119 8.35059L9.97119 14.8439"
        stroke="white"
        stroke-width="1.2"
        stroke-linejoin="round"
      />
      <Circle cx="10" cy="10" r="9.4" stroke="white" stroke-width="1.2" />
    </SVG>
  </View>
);
