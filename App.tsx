import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screen/auth/LoginScreen';
import SplashScreen from './src/screen/splash/SplashScreen';
import COLORS from './src/theme/colors';

const SPLASH_DURATION_MS = 2200;

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, SPLASH_DURATION_MS);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />
      <View style={styles.container}>
        {showSplash ? <SplashScreen /> : <LoginScreen />}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;
