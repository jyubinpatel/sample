import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screen/splash';
import SongScreen from './src/screen/songs';
import SongDetailsScreen from './src/screen/songDetails';
import Sample1Screen from './src/screen/sample1';
import Sample2Screen from './src/screen/sample2';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sample 1"
          component={Sample1Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Song"
          component={SongScreen}
          options={{
            title: 'Songs',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SongDetails"
          component={SongDetailsScreen}
          options={{
            title: 'Details',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Sample 2"
          component={Sample2Screen}
          options={{
            title: 'Sample 2',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
