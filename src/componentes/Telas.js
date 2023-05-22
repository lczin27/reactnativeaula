import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Estilo from './Estilo';
import NumerosAleatorios from './Aleatorio';

export default function Telas({ navigation }) {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Funções</Text>
          <Button
            title="Voltar para o Menu"
            onPress={() => navigation.goBack('')}
          />
          <Button
            title="Carregar Pagina"
            onPress={() => navigation.push('Telas')}
          />
          <Button title="Ir para Aleatorio" onPress={() => navigation.navigate('Aleatorio')} />
          <Button title="Ir para Contador" onPress={() => navigation.navigate('ContadorV2')} />
        </View>
      );
      
   }

