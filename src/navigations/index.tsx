import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import PreLoginScreen from '../screens/prelogin/index';
import EditarPerfilScreen from '../screens/editarPerfil/index';
import { NavegacaoApp } from './app';
import BarPerfilScreen from '../screens/barPerfil';

const Stack = createStackNavigator();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: true, gestureDirection: "horizontal", headerShown: false }}>
            <Stack.Screen name="prelogin" component={PreLoginScreen} />
            <Stack.Screen name="login" component={LoginScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="app" component={NavegacaoApp}
                options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="editarPerfil" component={EditarPerfilScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="barPerfil" component={BarPerfilScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        </Stack.Navigator>
    </NavigationContainer>
)