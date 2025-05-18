// imports...
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Apps from '../../Components/barre_sup';

export default function Inscription() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'URW': require('../../../assets/fonts/URWGeometricRegular.otf'),
    'URWGeometricBold': require('../../../assets/fonts/URWGeometricBold.otf'),
    'URWGeometricMedium': require('../../../assets/fonts/URWGeometricMedium.otf'),
    'URWGeometricSemiBold': require('../../../assets/fonts/URWGeometricSemiBold.otf'),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateFields = () => {
    let valid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Mail incorrect!');
      valid = false;
    } else {
      setEmailError('');
    }

    // Phone validation (8 digits for Tunisia)
    const phoneRegex = /^[0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Numéro de téléphone invalide!');
      valid = false;
    } else {
      setPhoneError('');
    }

    // Confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Mot de passe non identique!');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    return valid;
  };

  const onRegisterPress = () => {
    if (validateFields()) {
      alert('Inscription réussie');
      // navigation.navigate('Connexion');
    }
  };

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Apps />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Commencer Maintenant !</Text>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>Inscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, styles.inactiveTab]} onPress={() => navigation.navigate('Connexion')}>
            <Text style={styles.tabText}>Connexion</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom de l’entreprise</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, emailError ? styles.errorInput : null]}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <Text style={styles.label}>Gouvernorat</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Ville</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Numéro de Téléphone</Text>
          <View style={[styles.phoneInputContainer, phoneError ? styles.errorInput : null]}>
            <Image source={require('../../../assets/images/image 1.png')} style={styles.flagIcon} resizeMode="contain" />
            <Text style={styles.prefix}>+216</Text>
            <View style={styles.separator} />
            <TextInput
              style={styles.phoneInput}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

          <Text style={styles.label}>Mot de Passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require('../../../assets/images/fi-rr-eye-crossed.png')
                    : require('../../../assets/images/fi-rr-eye-crossed (1).png')
                }
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirmer le Mot de Passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, confirmPasswordError ? styles.errorInput : null]}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Image
                source={
                  showConfirmPassword
                    ? require('../../../assets/images/fi-rr-eye-crossed.png')
                    : require('../../../assets/images/fi-rr-eye-crossed (1).png')
                }
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={onRegisterPress}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Vous avez déjà un compte ? <Text style={styles.linkText} onPress={() => navigation.navigate('Connexion')}>Connectez-vous</Text>
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
    textAlign: 'center',
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
    backgroundColor: '#FF9D1B',
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
    marginBottom: 15,
    alignSelf: 'center',
    paddingLeft: 36,
    
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
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0, 61, 165, 0.4)',
    borderWidth: 1,
    borderRadius: 20,
    height: 57,
    width: 369,
    paddingHorizontal: 10,
    marginBottom: 15,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  prefix: {
    fontSize: 16,
    color: '#003DA5',
    fontFamily: 'URWGeometricMedium',
    marginRight: 8,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(0, 61, 165, 0.4)',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'URW',
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
    color: '#DF231D',
    fontSize: 13,
    fontFamily: 'URWGeometricMedium',
    marginBottom: 10,
    paddingLeft: 30,
  },
  errorInput: {
    borderColor: '#DF231D',
  },
});
