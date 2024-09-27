import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'
import {styles} from './style'

function CalculoIMC(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  const verificarIMC = () => {
    const resultadoIMC = peso / (altura * altura)
    
    if (resultadoIMC < 18.5) {
      setMensagem('Peso Baixo')
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
      setMensagem('Peso Normal')
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
      setMensagem('Sobrepeso')
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
      setMensagem('Obesidade grau I')
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
      setMensagem('Obesidade grau II')
    } else if (resultadoIMC > 40) {
      setMensagem('Obesidade grau III')
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Calculo IMC</Text>
       <Image
          style={{width: 350, height: 150, alignSelf:'center', margin:'10px'}}
          source={require('../../assets/IMC-TABELA.jpg')}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o seu peso em KG"
          onChangeText={setPeso}
          keyboardType='numeric'
          value={peso}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua altura (ex: 1.85)"
          onChangeText={setAltura}
          keyboardType='numeric'
          value={altura}
        />

        <Button title='Verificar' color='green' onPress={verificarIMC}/>

        <Text style={styles.resultado}>{mensagem}</Text>
      </View>
    </SafeAreaView>
  )
}

export default CalculoIMC