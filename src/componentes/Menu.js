import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ir para Telas</Text>
      <Button
        title="Ir para Telas"
        onPress={() => navigation.navigate('Telas')}
      />
    </View>
  );
}