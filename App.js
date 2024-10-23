import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import * as ddd from './service/ddd.js';
//import dados from './service/dados.js';
import CardCidade from './components/card_cidade';
import React, { useState } from 'react';

export default function App() {
  //const valores = ddd.buscarDDD(15);
  //valores.then(x=>console.log(x));
  const[uf, setUf] = useState('');
  const[cities, setCities] = useState([]);
  ddd.buscarDDDCallBack(11,dados=>{
    setUf(dados.state);
    setCities(dados.cities);
  })
  
  //const uf = dados.state;
  //const cities = dados.cities;
  return (
    <View style={styles.container}>

      <View style={styles.lista}>
        <FlashList
          style={styles.flashList}
          data={cities}
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
  },
  lista:{
    backgroundColor: '#0e0d0d',
    width: '100%',
    maxHeight: '100vh',
    overflow: 'scroll'
  }
});
