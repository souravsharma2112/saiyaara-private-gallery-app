import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/home/HomeScreen';
import SplashScreen from './src/screen/splash/SplashScreen';
import COLORS from './src/theme/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SPLASH_DURATION_MS = 2200;

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.root}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.background}
        />
        <View style={styles.container}>
          {showSplash ? <SplashScreen /> : <HomeScreen />}
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;
