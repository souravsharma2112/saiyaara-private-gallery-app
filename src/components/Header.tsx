import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  title: string;
  transparent?: boolean;
}

const homeLogo = require('../assets/images/homet.png');

const Header: React.FC<HeaderProps> = ({ title, transparent = false }) => {
  return (
   
    <View style={[styles.container, transparent && styles.transparentContainer]}>
        <View style={styles.logoShell}>
          <Image source={homeLogo} style={styles.logo} resizeMode="contain" />
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    // borderBottomColor: COLORS.border,
  },
  transparentContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  logoShell:{
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:300,
    height:150,
  },
});

export default Header;
