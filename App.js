import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loader from './Screens/Components/Loader/Index';
import Bienvenue from './Screens/Pages/Bienvenue/Index';
import Connexion from './Screens/Pages/Connexion/Index';
import Annonces from './Screens/Pages/Annonces/Index';
import Entreprise from './Screens/Pages/Entreprise/Index';
import Faqs from './Screens/Pages/Faqs/Index';
import Favoris from './Screens/Pages/Favoris/Index';
import Filters from './Screens/Pages/Filters/Index';
import Inscription from './Screens/Pages/Inscription/Index';
import Materiel from './Screens/Pages/Materiel/Index';
import Profile from './Screens/Pages/Profile/Index';
import Support from './Screens/Pages/Support/Index';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Connexion"
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Bienvenue" component={Bienvenue} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Annonces" component={Annonces} />
        <Stack.Screen name="Entreprise" component={Entreprise} />
        <Stack.Screen name="Faqs" component={Faqs} />
        <Stack.Screen name="Favoris" component={Favoris} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Materiel" component={Materiel} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Support" component={Support} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
