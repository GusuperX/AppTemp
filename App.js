import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [Celsius, setCelsius] = useState('');

function ConverterTemp(){

    const F =  (9* parseFloat(Celsius)+160) / 5;

    alert ('Essa temperatura de Celsius em Fahrenheit é : ' +F+ ' °F');
}

  return (

    <View style={styles.container}>


    <Image style={styles.Albert_fisica} resizeMode='center'
        source={require('./assets/Albert_fisica.png')}></Image>
      
      <Text style={styles.titulo}>Converterei C° em °F</Text>

    <TextInput style={styles.campoTemp} keyboardType="numeric" placeholder='Diga uma temperatura em C°:  ' onChangeText={setCelsius}>
    </TextInput>

    <TouchableOpacity style={styles.botao} onPress={ConverterTemp} >
      <Text style={styles.textoBotao}>Resposta do físico</Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#C1FAFB',
},

Albert_fisica:{
  width: 300,
  height: 400,
  alignSelf: 'center',
},

titulo:{
  fontSize: 30,
  textAlign: 'center', 
  color: '#0800ff',
  fontWeight: 'bold',  
},

campoTemp:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#ffffff', 
  borderRadius: 10,
  padding: 15,
  margin: 30,
  color: '#0800ff', 
},

botao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 10,
  backgroundColor: '#0800ff', 
  borderRadius: 9,
  padding: 10,
  margin: 100,
},

textoBotao:{
  fontSize: 18,
  textAlign: 'center',
  color: '#fff',
},


});
