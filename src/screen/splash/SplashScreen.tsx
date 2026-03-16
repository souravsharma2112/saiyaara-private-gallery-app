import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../theme/colors';

const splashLogo = require('../../assets/images/splash_logo.png');

const SplashScreen = (): React.JSX.Element => {
  return (
    <LinearGradient
      colors={COLORS.gradients.sunset}
      locations={[0, 1]}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
    >
      <View style={styles.orbTop} />
      <View style={styles.orbBottom} />

      <View style={styles.content}>
        <View style={styles.logoShell}>
          <Image source={splashLogo} style={styles.logo} resizeMode="contain" />
        </View>
        <Text style={styles.subtitle}>Secure Private Moments with Saiyaara.</Text>
      </View>
      <Text style={styles.footer}>Developed by Sourav Sharma {`(SRV)`}.</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 32,
  },
  orbTop: {
    position: 'absolute',
    top: -120,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(255, 95, 162, 0.16)',
  },
  orbBottom: {
    position: 'absolute',
    bottom: -140,
    left: -90,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(138, 43, 226, 0.18)',
  },
  content: {
    alignItems: 'center',
  },
  logoShell: {
    borderRadius: 86,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginBottom: 28,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius:60,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 260,
  },
  footer: {
    position: 'absolute',
    bottom: 48,
    color: COLORS.textDark,
    fontSize: 13,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
});

export default SplashScreen;
