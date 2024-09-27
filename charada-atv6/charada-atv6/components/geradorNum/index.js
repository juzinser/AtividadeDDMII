import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'
import {styles} from './Style'

function Charada() {
  const [resultado, setResultado] = useState(null)

  const gerarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 11)
    setResultado(numero) 
  }

  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Jogo do número aleatório</Text>
        <Image
          style={{ width: 150, height: 350, alignSelf: 'center', margin: '10px' }}
          source={require('../../assets/charada.jpg')}
        />
        <Text style={styles.titulo}>Pense em um número de 0 a 10</Text>

        {resultado !== null && <Text style={styles.resultado}>{resultado}</Text>}

        <Button title='Descobrir' color='green' onPress={gerarNumeroAleatorio} />
      </View>
    </SafeAreaView>
  )
}

export default Charada