import * as React from 'react';
import { View, Text } from 'react-native';

export interface PerfilScreenProps {
}

export function PerfilScreen(props: PerfilScreenProps) {
    return (
        <View style={{ backgroundColor: 'red', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Perfil</Text>
        </View>
    );
}
