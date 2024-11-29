import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {PaperProvider} from 'react-native-paper';
import {HomeScreen} from './src/presentation/screens/HomeScreen';
import {PostsScreen} from './src/presentation/screens/PostsScreen';
import {StatusBar} from 'react-native';
import {DetailsScreen} from './src/presentation/screens/DetailsScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isSSShown, setIsSSShown] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSSShown(true);
    }, 3000);
  }, []);

  return (
    <PaperProvider>
      <StatusBar backgroundColor={'transparent'} />
      <AnimatedSplash
        translucent={true}
        isLoaded={isSSShown}
        logoImage={require('./cosmocolor_brand.png')}
        backgroundColor={'#FFFF'}
        logoHeight={300}
        logoWidth={300}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PostsScreen"
              component={PostsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Pokemon"
              component={HomeScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AnimatedSplash>
    </PaperProvider>
  );
}

export default App;
