import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { commonStyles } from './style';
import { categoria } from './style';

const SecondScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    // Faça algo com o valor do input, por exemplo, exibindo um alert
    alert(`Texto digitado: ${inputValue}`);
  };

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={secondScreenStyles.input}
        placeholder="Digite algo..."
        onChangeText={(text) => setInputValue(text)}
      />
      <TouchableOpacity onPress={handleButtonPress} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;