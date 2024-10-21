import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import dados from './service/dados.js';
import CardCidade from './components/card_cidade';

const exibirNaTela = ({cities,uf,index})=>{
  return(
    <CardCidade 
        nome={cities} 
        uf={uf} 
        key={index}
    />
  );
}

export default function App() {
  const uf = dados.state;
  const cities = dados.cities;
  return (
    <View style={styles.container}>

      <View
        style={{
          backgroundColor: '#0e0d0d',
          width: '100%',
          maxHeight: '100vh',
          overflow: 'scroll'
        }}
      >
      <FlashList
        style={styles.flashList}
        data={cities}
        // renderItem={({ item }) => <Text>{item.title}</Text>}
        renderItem={({item,index})=>
          <CardCidade 
              nome={item} 
              uf={uf} 
              key={index}
          />
        }
        estimatedItemSize={200}
      />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  flashList:{
    flexGrow:0,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#e70e0e'
  }
});
