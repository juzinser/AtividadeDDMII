import { Text, View, StyleSheet, Image } from 'react-native';
import {styles} from './Style'

export default function Componente1({title, values}) {
  return (
    <View style={styles.valueWrapper}>
      <Text style={styles.valueTitle}>{title}</Text>
        {values.map((value,index) =>
          <Text key={index} style={styles.valueText}>
          {value}
        </Text>
        )}
    </View>
  );
}

