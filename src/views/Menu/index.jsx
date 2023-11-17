import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style';

const Menu = () => {
  const menuData = [
    { id: '1', nome: 'Big Mac', preco: 'R$24.99' },
    { id: '2', nome: 'McChicken', preco: 'R$19.99' },
    { id: '3', nome: 'Chicken McNuggets', preco: 'R$15.99' },
   
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu do McDonald's</Text>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Menu;