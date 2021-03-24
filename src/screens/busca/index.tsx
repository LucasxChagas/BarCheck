import * as React from 'react';
import { View, Text } from 'react-native';

export interface BuscaScreenProps {
}

export function BuscaScreen(props: BuscaScreenProps) {
    return (
        <View style={{ backgroundColor: 'green', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Busca</Text>
        </View>
    );
}
