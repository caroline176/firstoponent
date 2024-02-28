import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
  <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
  </View>

  <View style={styles.secondaryContainer}>
    <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold',  textAlign: 'right',}}>Caroline Aparecida de Oliveira Santos</Text>
    <Text style={{color: 'purple', fontSize: 25, fontStyle: 'italic', borderBottomColor: 'red', borderBottomWidth: 1, width: 180, textAlign: 'left'}}>Numero:8</Text>
    <Text style={{backgroundColor: 'pink', color: 'blue', fontSize: 20, textAlign: 'center'}}>Sala:07</Text>
  </View>

  <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
  </View>
  </View>
  );
  }
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  secondaryContainer: {
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  backgroundColor: '#fff',
  },
  });
  