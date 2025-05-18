import React from 'react';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';

const Apps = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <ImageBackground
        source={require('../../assets/entete.png')}
        style={styles.headerBackground}
      />
      
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_un: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  image_deux: {
    position: 'absolute',
    top: 50,
    left: 35,
  },
  logo: {
    position: 'absolute',
    top: 110,
    left: 110,
  },
});

export default Apps;