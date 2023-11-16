// import { styles } from "./style";
// import { View, Text, StyleSheet } from "react-native";
// import React from "react";

// const Home = () => {
//   return (
//     <View>
//       <Text style={styles.texto}> QUALQUER COISA </Text>
//     </View>
//   );
// };

// export default Home;

//---------------------------------------------------------
import React from 'react';
import { View, Button } from 'react-native';
import { commonStyles } from './style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Button
        title="Ir para a Segunda Rota"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

export default HomeScreen;