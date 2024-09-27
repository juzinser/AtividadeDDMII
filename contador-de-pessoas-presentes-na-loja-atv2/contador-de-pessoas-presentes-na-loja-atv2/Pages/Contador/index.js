import { View, Text, SafeAreaView } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao/index'


function Contador(){
  const [cont, setCont] = useState(0)

  function addPerson(){
    setCont(cont + 1)
  }

  function subperson(){
    if (cont > 0)
      setCont(cont - 1)
  }

  function reset(){
    setCont(0)
  }

  return(
    <SafeAreaView >
    
      <Text style={styles.principalTitle}>Contador de Pessoas</Text>
      <Text style={styles.contador}>{cont}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Botao title='Adicionar' background='green' funcao={addPerson}/>

        <Botao title='Excluir' background='red' funcao={subperson}/>

        <Botao title='Resetar' background='orange'  funcao={reset} />
     </View>
    </SafeAreaView>
  )
}

export default Contador