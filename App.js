import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
// import {DataContext} from './src/context'; if we have to store data and managed then it will use
import Navigation from './Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#000',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
