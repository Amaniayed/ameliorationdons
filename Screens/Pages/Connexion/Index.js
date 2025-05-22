import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Apps from '../../Components/barre_sup';

export default function Connexion() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'URW': require('../../../assets/fonts/URWGeometricRegular.otf'),
    'URWGeometricBold': require('../../../assets/fonts/URWGeometricBold.otf'),
    'URWGeometricMedium': require('../../../assets/fonts/URWGeometricMedium.otf'),
    'URWGeometricSemiBold': require('../../../assets/fonts/URWGeometricSemiBold.otf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const onLoginPress = () => {
    let valid = true;

    if (!email || !validateEmail(email)) {
      setEmailError('Veuillez entrer un email valide.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Veuillez entrer votre mot de passe.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      alert('Connexion réussie');
      // navigation.navigate('Annonces'); // Redirection après connexion
    }
  };

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Apps />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        <Text style={styles.title}>Connectez-vous !</Text>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.inactiveTab]} onPress={() => navigation.navigate('Inscription')}>
            <Text style={styles.tabText}>Inscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>Connexion</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <Text style={styles.label}>Mot de Passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword
                  ? require('../../../assets/images/fi-rr-eye-crossed.png')
                  : require('../../../assets/images/fi-rr-eye-crossed (1).png')}
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

         <TouchableOpacity onPress={() => navigation.navigate('MotDePasseOublie')}>
  <Text style={styles.forgotPassword}>Mot de Passe Oublié ?</Text>
</TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Vous n’avez pas de compte ?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Inscription')}>Créez un compte</Text>
        </Text>

        <View style={{ height: 40 }} />
        <StatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#003DA5',
    fontFamily: 'URWGeometricBold',
    marginBottom: 20,
    textAlign: 'left',
    marginRight: '140',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
    backgroundColor: 'rgba(0, 61, 165, 0.2)',
    borderRadius: 40,
    height: 70,
    width: 350,
    padding: 8,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  activeTab: {
    backgroundColor: '#003DA5',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 167,
  },
  inactiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 167,
  },
  tabText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'URWGeometricSemiBold',

  },
  inputGroup: {
    marginTop: 10,
    width: '100%',
  },
  input: {
    height: 57,
    width: 369,
    borderColor: 'rgba(0, 61, 165, 0.4)',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignSelf: 'center',
    paddingLeft: 36,
    color: '#003DA5',
  },
  label: {
    fontSize: 18,
    color: '#003DA5',
    fontFamily: 'URWGeometricMedium',
    paddingLeft: 30,
    marginBottom:10,
    
  },
  button: {
    backgroundColor: '#003DA5',
    width: 255,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'URWGeometricBold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  eyeImage: {
    width: 24,
    height: 24,
    tintColor: '#003DA5',
  },
  forgotPassword: {
    color: 'rgba(0, 61, 165, 0.5)',
    fontFamily: 'URW',
    textAlign: 'right',
    paddingRight: 30,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'URWGeometricMedium',
    color: '#003DA5',
    marginTop: 15,
  },
  linkText: {
    color: '#FF9D1B',
    fontFamily: 'URWGeometricSemiBold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'URWGeometricMedium',
    paddingLeft: 30,
    marginBottom: 5,
  },
});
