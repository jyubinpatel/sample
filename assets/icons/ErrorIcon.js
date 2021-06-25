import React from 'react';
import {SvgCss} from 'react-native-svg';
const xml = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9977 0.194092L0.220459 18.8608H21.7749L10.9977 0.194092ZM10.9977 3.3052L2.91476 17.3052H19.0806L10.9977 3.3052Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2222 13.2321L10.2222 7.30615L11.7778 7.30615L11.7778 13.2321L10.2222 13.2321Z" fill="white"/>
<circle cx="11.0003" cy="15.2015" r="1.00741" fill="white"/>
</svg>`;

export const ErrorIcon = ({height, width}) => (
  <SvgCss xml={xml} width={width} height={height} />
);
