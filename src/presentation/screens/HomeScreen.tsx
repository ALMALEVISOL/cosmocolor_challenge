import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const BACKGROUND_GRADIENT = ['#FF5CCC', '#B947B1', '#512889'];

export const HomeScreen = () => {
  const {navigate} = useNavigation();

  const handlePostsClick = () => {
    navigate('PostsScreen');
  };

  return (
    <SafeAreaView style={HomeScreenStyles.mainSafeArea}>
      <StatusBar backgroundColor={'transparent'} />
      <LinearGradient
        colors={BACKGROUND_GRADIENT}
        style={HomeScreenStyles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text variant="displayLarge" style={HomeScreenStyles.white}>
          ¡Bienvenido!
        </Text>
        <TouchableOpacity
          onPress={handlePostsClick}
          style={HomeScreenStyles.generalButton}>
          <Text variant="headlineLarge" style={HomeScreenStyles.white}>
            Comenzar
          </Text>
          <LottieView
            source={require('../assets/right_arrow.json')}
            style={HomeScreenStyles.mainLottieView}
            autoPlay
            loop
          />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const HomeScreenStyles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  white: {
    color: '#FFFF',
  },
  generalButton: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  mainLottieView: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.11,
  },
});
