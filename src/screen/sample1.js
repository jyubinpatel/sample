import React, {useEffect} from 'react';
import {Image, useColorScheme} from 'react-native';
import {imagesPath} from '../../assets';

function Sample1(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#000',
    flex: 1,
    alignSelf: 'center',
  };
  useEffect(() => {
    setTimeout(() => props.navigation.replace('Song'), 3000);
  }, []);

  return (
    <Image
      style={backgroundStyle}
      source={imagesPath.splash}
      resizeMode="stretch"
    />
  );
}
export default Sample1;
