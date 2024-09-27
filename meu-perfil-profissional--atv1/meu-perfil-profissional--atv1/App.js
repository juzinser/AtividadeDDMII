import { SafeAreaView,Image } from 'react-native';

import Componente1 from './components/Componente1/Index';
import Componente2 from './components/Componente2/Index2';

export default function App() {
  return (
    <SafeAreaView style={{ padding: 16, rowGap: 12, flex: 1 }}>
     <Image 
      source={{ uri:"https://i.pinimg.com/236x/65/1d/d8/651dd844181714c422bd35580d72bd75.jpg" }} 
      style={{width: 230, height: 230}}
    />

     <Componente1
     title="Dados Pessoais"
     values={["Nome: Júlia Zinser"]}
     />

     <Componente1
     title="Formação"
     values={["Sistemas para Internet - Fatec Rubens Lara"]}
     />
     
  <Componente2 
  title="Projetos"
  values={[
    "GitHub: ", <a href="https://github.com/juzinser" target="_blank">https://github.com/juzinser</a>]
  }
/> 
    </SafeAreaView>
  );
}

