import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Loader = () => {
  return (
    <SafeAreaView style={LoaderStyles.mainView}>
      <LottieView
        source={require('../../assets/loader.json')}
        style={LoaderStyles.mainLottieView}
        autoPlay
        loop
      />
      <Text variant="headlineLarge" style={LoaderStyles.white}>
        Cargando...
      </Text>
    </SafeAreaView>
  );
};

const LoaderStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    backgroundColor: 'purple',
  },
  mainLottieView: {
    width: '95%',
    height: '30%',
  },
  white: {
    color: '#FFFF',
  },
});
