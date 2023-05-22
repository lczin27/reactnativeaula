
import React from 'react';
import { View, Text, Button } from 'react-native';

const NumerosAleatorios = ({navigation}) => {
  const [numeroAleatorio, setNumeroAleatorio] = React.useState(null);

  const gerarNumeroAleatorio = () => {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumeroAleatorio(novoNumero);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Número Aleatório: {numeroAleatorio}</Text>
      <Button title="Gerar Número" onPress={gerarNumeroAleatorio} />
      <Button
            title="Voltar para Telas"
            onPress={() => navigation.goBack('Telas')}
          />
    </View>
  );
};

export default NumerosAleatorios;
