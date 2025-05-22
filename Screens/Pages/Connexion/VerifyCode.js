import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Apps from '../../Components/barre_sup2';
import { useRoute } from '@react-navigation/native';


export default function VerifyCode() {
 const navigation = useNavigation();

  const [code, setCode] = useState(['', '', '', '', '']);
  const [error, setError] = useState(false);

  const [fontsLoaded] = useFonts({
    'URW': require('../../../assets/fonts/URWGeometricRegular.otf'),
    'URWGeometricBold': require('../../../assets/fonts/URWGeometricBold.otf'),
    'URWGeometricMedium': require('../../../assets/fonts/URWGeometricMedium.otf'),
    'URWGeometricSemiBold': require('../../../assets/fonts/URWGeometricSemiBold.otf'),
  });

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false);
  };
  const route = useRoute();
const { email, expectedCode } = route.params;


  const verifyCode = () => {
    const enteredCode = code.join('');
    const expectedCode = '12345'; // À remplacer par une logique serveur ou API

    if (enteredCode === expectedCode) {
      alert('Code vérifié avec succès !');
      // navigation.navigate('NouvellePage');
    } else {
      setError(true);
    }
  };

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       <Apps onBack={() => navigation.navigate('MotDePasseOublie')} />
      <View style={styles.container}>
        <Text style={styles.title}>Vérifiez votre email !</Text>
        <Text style={styles.subtitle}>
          Nous avons envoyé un lien de réinitialisation à votre email{'\n'}Entrez le code à 5 chiffres mentionné.
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.codeInput, error && styles.errorBorder]}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
            />
          ))}
        </View>

        {error && <Text style={styles.errorText}>Code incorrect, réessayez !</Text>}

        <TouchableOpacity style={styles.button} onPress={verifyCode}>
          <Text style={styles.buttonText}>Vérifier le code</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Vous n’avez pas encore reçu l’email ?{' '}
          <Text style={styles.resendLink} onPress={() => alert('Email renvoyé')}>
            Renvoyer l’email
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#003DA5',
    fontFamily: 'URWGeometricBold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(0, 61, 165, 0.8)',
    fontFamily: 'URW',
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#003DA5',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#003DA5',
    fontFamily: 'URWGeometricBold',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'URWGeometricMedium',
    marginBottom: 10,
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
  resendText: {
    fontSize: 14,
    fontFamily: 'URW',
    color: '#003DA5',
    marginTop: 20,
  },
  resendLink: {
    color: '#FF9D1B',
    fontFamily: 'URWGeometricSemiBold',
  },
});
