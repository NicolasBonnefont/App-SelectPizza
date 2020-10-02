import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function App() {

  const [pizza, setPizza] = useState([
    { id: 1, nome: 'Frango com catupiry', valor: '35,90' },
    { id: 2, nome: 'Calabresa com Queijo', valor: '45,90' },
    { id: 3, nome: 'Frango com Cheddar', valor: '30,90' },
    { id: 4, nome: 'Moda da Casa', valor: '25,90' },
  ])
  const [pizzaSelect, setPizzaSelect] = useState([{ id: 0, nome: '', valor: '00,00' }])

  function selectPizza(item) {
    setPizzaSelect(pizza[item])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
        //selectedValue={}
        onValueChange={(itemValue, itemIndex) => selectPizza(itemIndex)}
      >
        {pizza.map(i => <Picker.Item key={i.id} value={i.valor} label={i.nome} />)}

      </Picker>

      <Text style={styles.pizzas}>Voce escolheu: {pizzaSelect.nome} </Text>
      <Text style={styles.pizzas}>R$ {pizzaSelect.valor}</Text>
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
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'

  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  }
});
