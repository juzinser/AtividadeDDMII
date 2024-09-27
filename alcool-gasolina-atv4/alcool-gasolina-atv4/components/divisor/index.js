import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'
import {styles} from './style'

function Divisor(){
  const [gasolina, setGasolina] = useState('')
  const [alcool, setAlcool] = useState('')
  const [mensagem, setMensagem] = useState('')

  const verificarCombustivel = () => {
    const resultadoConta = alcool / gasolina
    
    if (resultadoConta < 0.7) {
      setMensagem('Álcool é a melhor opção!')
    } else {
      setMensagem('Gasolina é a melhor opção!')
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Álcool ou Gasolina?</Text>
        <Image
          style={{width: 230, height: 120, alignSelf:'center', margin:'10px'}}
          source={require('../../assets/abre.jpg')}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          onChangeText={setGasolina}
          keyboardType='numeric'
          value={gasolina}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o preço do álcool"
          onChangeText={setAlcool}
          keyboardType='numeric'
          value={alcool}
        />

        <Button title='Verificar' color='green' onPress={verificarCombustivel}/>

        <Text style={styles.resultado}>{mensagem}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Divisor