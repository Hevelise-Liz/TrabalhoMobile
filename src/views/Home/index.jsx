import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "../Home/style";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pesquisar}>
        <Fontisto name="search" size={24} color="black" />
        <Text style={styles.encontre}>Encontre cupons</Text>
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>

      <Image
        source={require("../../../assets/promo.jpg")}
        style={styles.imagemRecomendacoes}
      />
      <View style={styles.pontinhos}>
        <Ionicons
          name="md-ellipsis-horizontal-outline"
          size={34}
          color="black"
        />
      </View>

      <Text style={styles.title}>
        <strong>Recomendações pra você</strong>
      </Text>
      <Text style={styles.emoji}>😍</Text>

      <Image
        source={require("../../../assets/promo2.jpg")}
        style={styles.imagem2}
      />

      <TouchableOpacity
        style={styles.botão1}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.botãoTexto}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botão2}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.botãoTexto}>Comprar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botão3}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.botãoTexto}>Cupons</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botão4}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.botãoTexto}>MeuM</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botão5}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.botãoTexto}>Mais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon1}
        onPress={() => navigation.navigate("Menu")}
      >
        <Ionicons name="ios-home-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon2}
        onPress={() => navigation.navigate("Menu")}
      >
        <EvilIcons name="credit-card" size={34} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon3}
        onPress={() => navigation.navigate("Menu")}
      >
        <AntDesign name="tago" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon4}
        onPress={() => navigation.navigate("Menu")}
      >
        <AntDesign name="trademark" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon5}
        onPress={() => navigation.navigate("Menu")}
      >
        <Ionicons
          name="md-ellipsis-horizontal-outline"
          size={34}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
