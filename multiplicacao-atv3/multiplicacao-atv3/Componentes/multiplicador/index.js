import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import {styles} from './style'

function Multiplicador(){
  const [resultado, setResultado] = useState()
  const [numero1, salvarnumero1] = useState()
  const [numero2, salvarnumero2] = useState()

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o 1° número"
          onChangeText={salvarnumero1}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o 2° número"
          onChangeText={salvarnumero2}
          keyboardType='numeric'
        />

        <Button title='Multiplicar' color='green' onPress={() => setResultado(numero1 * numero2)}/>

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Multiplicador