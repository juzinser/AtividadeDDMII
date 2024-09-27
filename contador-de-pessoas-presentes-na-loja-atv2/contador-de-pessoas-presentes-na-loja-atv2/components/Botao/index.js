import { View, Button } from 'react-native'
import {styles} from './Style'

function Botao(props){
  return(
    <View style={styles.contorno}>
      <Button title={props.title} color={props.background} onPress={props.funcao} />
    </View>
  )
}

export default Botao