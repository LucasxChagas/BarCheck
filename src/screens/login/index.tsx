import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator, Image, Alert } from 'react-native';
import { LoginButtons, Inputs } from './../components/components';
import { styles } from "./syles";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useTheme, Button, TextInput } from 'react-native-paper';

export interface LoginScreenProps { }

export default function LoginScreen(props: LoginScreenProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState('');
    const { colors } = useTheme();



    const logar = async (dados: any) => {
        setErro("");

        await new Promise(resolve => setTimeout(resolve, 2000));
        if (dados.email == 'teste@teste.com' && dados.senha == '123456')
            nav.navigate('app');
        else
            Alert.alert(
                "Algo deu errado...",
                "E-mail ou senha incorreto(s).",
                [
                    {
                        text: "OK",
                    }
                ]
            );
    }

    return (

        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.loginT, { color: colors.text }]}>Bem-vindo!</Text>
            <Text style={[styles.loginTS, { color: colors.text }]}>Entre com o seu perfil.</Text>
            <Formik
                initialValues={{ email: '', senha: '' }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido.'),
                    senha: Yup.string().required('Senha obrigatória.').min(6, 'A senha precisa ter no mínimo, 6 caracteres.')
                })}
                onSubmit={logar}>
                {({ errors, handleChange, handleSubmit, isSubmitting, touched, handleBlur }) => (
                    <View style={{ alignItems: 'center' }}>

                        <Inputs icon="envelope" errorMensage={errors.email} label="E-mail" placeholder="Digite o seu e-mail." onBlur={handleBlur("email")} onChangeText={handleChange("email")} />
                        {touched.email}
                        <Inputs icon="lock" errorMensage={errors.senha} label="Senha" placeholder="Digite a sua senha." senha onBlur={handleBlur("senha")} onChangeText={handleChange("senha")} />
                        {touched.senha}


                        {erro != "" && <Text style={[styles.erroLogin]}>{erro}</Text>}
                        {isSubmitting && <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: colors.primary }]} loading mode="contained">Conectando</Button>}
                        {!isSubmitting && <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: colors.primary }]} icon="sign-in" mode="contained" onPress={() => handleSubmit()}>Fazer Login</Button>}
                        <Text style={{ color: colors.text, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}> Ou </Text>
                        <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: '#2467b6' }]} icon="facebook" mode="contained" onPress={() => console.log('Login com Facebook')}>Login com Facebook</Button>
                        <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: '#ff4131', marginTop: 10, }]} icon="google" mode="contained" onPress={() => console.log('Login com Google')}>Login com Google</Button>
                    </View>
                )}
            </Formik>
            <Text style={[styles.cadastro, { color: colors.text }]}>
                Ainda não possui cadastro? {'\n'} Toque <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>aqui</Text> e cadastre-se!
            </Text>
        </View>
    );
}
