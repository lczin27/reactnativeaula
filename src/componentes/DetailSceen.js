import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Estilo from './Estilo';

export default function Aleatorio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Funções</Text>
      <Button
        title="Carregar Pagina"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Ir para Aleatorio" onPress={() => navigation.navigate('Aleatorio')} />
      <Button title="Ir para Contador" onPress={() => navigation.navigate('ContadorV2')} />
    </View>
  );
}