import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import Apps from '../../Components/barre_sup1';


export default function MotDePasseOublie() {
  const navigation = useNavigation();
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const handleSubmit = () => {
  if (!email.includes('@')) {
    setEmailError('Adresse email invalide');
  } else {
    setEmailError('');
    // Ici, tu peux faire appel à ton service backend pour envoyer l'e-mail
    alert('Email envoyé !');
    const generatedCode = '12345'; // Simulé

    // Naviguer vers la page de code avec l'email et le code (temporairement pour test)
    navigation.navigate('VerifyCode', { email, expectedCode: generatedCode });
  }
};

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Apps />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        
        </TouchableOpacity>

        <Text style={styles.title}>Mot de Passe Oublié</Text>
        <Text style={styles.subtitle}>Veuillez entrer votre email pour réinitialiser le mot de passe.</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, emailError && styles.inputError]}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#003DA5',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#003DA5',
    marginBottom: 10,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#003DA5',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#003DA5',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
