import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeScreen } from '../screens/home';
import { FavoritosScreen } from '../screens/favoritos';
import { PerfilScreen } from '../screens/perfil';
import { AgendamentoScreen } from '../screens/agendamento';
import { BuscaScreen } from '../screens/busca';
import { Appearance } from 'react-native';
import { View } from 'react-native';



const ColorScheme = Appearance.getColorScheme();

const Tab = createMaterialBottomTabNavigator();

//Tarefa
export const NavegacaoApp = () => (
    <Tab.Navigator activeColor="#f7931e" barStyle={{ backgroundColor: ColorScheme == 'dark' ? 'black' : 'white' }} shifting={true}>
        <Tab.Screen name="home" component={HomeScreen} options={{
            tabBarLabel: 'Início', tabBarIcon: ({ color }) => (<Icon name="home" size={24} color={color} />),
        }} />
        <Tab.Screen name="search" component={BuscaScreen} options={{
            tabBarLabel: 'Busca', tabBarIcon: ({ color }) => (<Icon name="search" color={color} size={24} />),
        }} />
        <Tab.Screen name="today" component={AgendamentoScreen} options={{
            tabBarLabel: 'Agenda', tabBarIcon: ({ color }) => (<Icon name="calendar" color={color} size={24} />),
        }} />
        <Tab.Screen name="favoritos" component={FavoritosScreen} options={{
            tabBarLabel: 'Favoritos', tabBarIcon: ({ color }) => (<Icon name="heart-o" color={color} size={24} />),
        }} />
        <Tab.Screen name="perfil" component={PerfilScreen} options={{
            tabBarLabel: 'Perfil', tabBarIcon: ({ color }) => (<Icon name="user-circle" color={color} size={24} />),
        }} />
    </Tab.Navigator>
)