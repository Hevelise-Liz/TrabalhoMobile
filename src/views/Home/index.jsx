import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './style';

const Home = ({ navigation }) => {
  return (
    <View style={Home.container}>
      <Text style={Home.title}>Bem-vindo ao McDonald's</Text>
      <Button
        title="Ver Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
};

export default Home;