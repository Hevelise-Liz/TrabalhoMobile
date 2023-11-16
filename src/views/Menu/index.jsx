// screens/MenuScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { menuStyles } from './style';

const Menu = () => {
  const menuData = [
    { id: '1', nome: 'Big Mac', preco: '$4.99' },
    { id: '2', nome: 'McChicken', preco: '$3.99' },
    { id: '3', nome: 'Chicken McNuggets', preco: '$5.99' },
    // Adicione mais itens conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={menuStyles.item}>
      <Text style={menuStyles.itemName}>{item.nome}</Text>
      <Text style={menuStyles.itemPrice}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.title}>Menu do McDonald's</Text>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Menu;