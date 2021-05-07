import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { PerfilHeader, PerfilLista } from './components';
import { HeaderTwo } from '../components/components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { NoActivity } from '.././components/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';



export interface EditarPerfilScreenProps {
}

export default function EditarPerfilScreen(props: EditarPerfilScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();


    return (
        <View style={{ backgroundColor: colors.accent }}>
            <HeaderTwo text="Editar Perfil" onPress={() => nav.goBack()} />
            <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/BackgroundPerfil.png')} blurRadius={3}>
                <Icon name='camera' size={25} color="white" />
            </ImageBackground>
            <View style={{ width: '100%', height: '100%', backgroundColor: colors.background }}>
                <ImageBackground imageStyle={{ opacity: 0.7, backgroundColor: 'black', borderRadius: 500 }}
                    style={{ backgroundColor: 'black', marginLeft: 10, marginTop: -55, height: 100, width: 100, borderRadius: 500, alignItems: 'center', justifyContent: 'center' }}
                    source={require('../../assets/profile.png')} blurRadius={3}>
                    <Icon name='camera' size={25} color="white" />
                </ImageBackground>

                <TextInput
                    label="Nome"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                    value='Lucas'
                />
                <TextInput
                    label="Sobrenome"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                    value='Chagas'
                />
                <TextInput
                    label="Endereço"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end', marginTop: 20 }}
                    value='Rua Pedro Manoel Mendes, 106'
                />
                <TextInput
                    label="Aniversário"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                    value='03/03/1999'
                />
                <TextInput
                    label="Gênero"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                    value='Masculino'
                />
                <TextInput
                    label="Sobre"
                    style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                    value='Informações...'
                />


            </View>


        </View>
    );
}
