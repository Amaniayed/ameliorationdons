import React from 'react';  
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity } from 'react-native'; 

const Apps = ({ onBack }) => {  
  return (  
    <View style={styles.container}>
      <ImageBackground  
        source={require('../../assets/entete.png')}   
        style={styles.headerBackground}
        resizeMode="cover"
      >
        {/* Élément ellipse cliquable */}
        <TouchableOpacity style={styles.image_un} onPress={onBack}>
          <Image source={require('../../assets/Ellipse.png')} />
        </TouchableOpacity>

        {/* Élément flèche cliquable */}
        <TouchableOpacity style={styles.image_deux} onPress={onBack}>
          <Image source={require('../../assets/fleche.png')} />
        </TouchableOpacity>

        {/* Logo */}
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </ImageBackground>
    </View>
  );  
};  

const styles = StyleSheet.create({  
  container: {
    backgroundColor: 'white',
  },
  headerBackground: {  
    width: '100%',  
    height: 175,  
    justifyContent: 'center',  
    alignItems: 'center',  
    position: 'relative',
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
    resizeMode: 'contain',
  },
});  

export default Apps;
