import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg from './assets/bg.jpg'
import store from './redux/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <ImageBackground source={bg} style={styles.image}>
      <Text>Hello Hello</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
