import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { PerfilHeader, PerfilLista } from './components';
import { HeaderFour } from '../components/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, FAB } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { NoActivity } from '.././components/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'



export interface PerfilScreenProps {
}

export function PerfilScreen(props: PerfilScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: colors.accent }}>

            <HeaderFour color={colors.text} colorIcon={colors.text} text="Lucas Chagas" />

            <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/BackgroundPerfil.png')} blurRadius={3}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.imageTitulos, { alignSelf: 'flex-end', paddingRight: 20, color: 'white' }]}>RESERVAS</Text>
                        <Text style={[styles.imageSubTitulos, { alignSelf: 'flex-end', paddingRight: 20, color: 'white' }]}>02</Text>
                    </View>
                    <Avatar size={80} rounded source={require('../../assets/profile.png')} >
                        <Avatar.Accessory onPress={() => nav.navigate('editarPerfil')} name="pencil-alt" type="font-awesome-5" size={25} />
                    </Avatar>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.imageTitulos, { alignSelf: 'flex-start', paddingLeft: 20, color: 'white' }]}>BARES⠀⠀⠀</Text>
                        <Text style={[styles.imageSubTitulos, { alignSelf: 'flex-start', paddingLeft: 20, color: 'white' }]}>02</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: 15, alignItems: 'center' }}>
                    <Text style={[styles.nickname, { color: 'white' }]}>shinaygami</Text>
                    <Text style={[styles.dataCadastro, { color: 'white' }]}>Cadastro desde: 05/05/2021 </Text>
                </View>
            </ImageBackground>

            <PerfilLista
                borderColor={colors.accent} containerTitle="RESERVAS" containerNew="NOVA RESERVA" containerColor={colors.background} actionColor={colors.text}
                newColor={colors.primary} itemTitle={colors.text} itemSubTitle={colors.accent} />
            <NoActivity textColor={colors.text} textSubColor={colors.text} iconColor={colors.text} buttonTextColor={colors.text} />

            <FAB
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: colors.primary }}
                icon="beer"
                color={colors.text}
                onPress={() => console.log('Pressed')}
            />

        </View>
    );
}
