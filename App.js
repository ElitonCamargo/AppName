import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import dados from './service/dados.js';
import CardCidade from './components/card_cidade'; // Corrigir o nome da importação

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
      <CardCidade nome="Tiete" uf="SP" /> {/* Corrigir o nome do componente */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
