import {Text, View, TextInput} from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';

export default () => {
  const [numero, setNumero] = useState(0);
  const [dobro, setDobro] = useState(0);

  function calcularDobro(){
    setDobro(parseInt(numero)*2)
  }

  return (
  <View>
    <Text>Cálculo do Dobro</Text>

    <TextInput placeholder='Digite um número' onChangeText={setNumero}/>

    <Button title="Calcular dobro" onPress={calcularDobro}/>

    <Text>{dobro}</Text>
  </View>
  )
}