import * as React from 'react';
import { View, Text } from 'react-native';

export interface FavoritosScreenProps {
}

export function FavoritosScreen(props: FavoritosScreenProps) {
    return (
        <View style={{ backgroundColor: 'blue', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Favoritos</Text>
        </View>
    );
}
