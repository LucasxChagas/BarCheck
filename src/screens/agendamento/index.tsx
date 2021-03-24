import * as React from 'react';
import { View, Text } from 'react-native';

export interface AgendamentoScreenProps {
}

export function AgendamentoScreen(props: AgendamentoScreenProps) {
    return (
        <View style={{ backgroundColor: 'yellow', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Agendamento</Text>
        </View>
    );
}
