import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Searchbar, DefaultTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';

export interface HomeScreenProps { }

export function HomeScreen(props: HomeScreenProps) {


    const [searchQuery, setSearchQuery] = React.useState('');
    const { colors } = useTheme();
    const onChangeSearch = query => setSearchQuery(query);



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={styles.titleBox}>
                <Text style={[styles.title, { color: colors.text }]}>Encontre seu Bar favorito!🍻</Text>
                <View style={styles.titleIcon}>
                    <Icon name='search' size={25} color={colors.text} />
                </View>
            </View>
            <View style={styles.sDiv}>
                <Searchbar icon="street-view" iconColor={colors.placeholder} inputStyle={{ color: colors.text }}
                    style={[styles.sBar, { backgroundColor: colors.accent }]} placeholder="Onde você está?" onChangeText={onChangeSearch} value={searchQuery} />
            </View>
            <ScrollView >



                <View style={styles.cDiv}>

                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/MinhaCasaRestoBar.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>Minha Casa Restobar</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>5.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/TheSpoilers.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>The Spoilers Bar</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star' size={22} color='#ffb902' />
                                <Icon name='star-half' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>4.5</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/default.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>[Nome do Bar]</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>0.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/default.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>[Nome do Bar]</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>0.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/default.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>[Nome do Bar]</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>0.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/default.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>[Nome do Bar]</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>0.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.cBox, { backgroundColor: colors.accent }]}>
                        <Image style={styles.cBarLogo} source={require('./../../assets/default.png')} />

                        <View style={styles.cBarTextBox}>
                            <Text style={[styles.cBarName, { color: colors.text }]}>[Nome do Bar]</Text>
                            <View style={styles.cBarStarsList}>
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Icon name='star-o' size={22} color='#ffb902' />
                                <Text style={styles.cBarStarRate}>0.0</Text>
                            </View>
                            <View style={[styles.cBarButton, { backgroundColor: colors.background }]}>
                                <Text style={[styles.cBarButtonText, { color: colors.text }]}>Ver Perfil</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
