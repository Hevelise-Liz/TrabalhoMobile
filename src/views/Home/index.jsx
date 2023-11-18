import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../Home/style";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" />

      <Text style={styles.title}>Bem-vindo ao McDonald's</Text>
      <Button title="Ver Menu" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
};
export default Home;
