import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Menu = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedInput, setSavedInput] = useState("");

  useEffect(() => {
    loadSavedInput();
  }, []);

  const menuData = [
    {
      nome: "Cheddar McMelt",
      preco: "R$24.99",
      imagem: require("../../../assets/cheedar.png"),
    },
    {
      nome: "Big Tasty",
      preco: "R$29.99",
      imagem: require("../../../assets/tasty.png"),
    },
    {
      nome: "McChicken",
      preco: "R$14.99",
      imagem: require("../../../assets/chicken.png"),
    },
    {
      nome: "Chicken McNuggets",
      preco: "R$15.99",
      imagem: require("../../../assets/nugget.png"),
    },
    {
      nome: "Big Mac",
      preco: "R$21.99",
      imagem: require("../../../assets/bigMac.png"),
    },
    {
      nome: "Mc Fritas",
      preco: "R$11.99",
      imagem: require("../../../assets/fritas.png"),
    },

    {
      nome: "McFlurry M&Ms Chocolate",
      preco: "R$14.99",
      imagem: require("../../../assets/flurry.png"),
    },
    {
      nome: "Casquinha Mista",
      preco: "R$3.99",
      imagem: require("../../../assets/casquinha.png"),
    },
    {
      nome: "Top Sundae Morango",
      preco: "R$8.99",
      imagem: require("../../../assets/sundae.png"),
    },
    {
      nome: "Coca Cola",
      preco: "R$11.99",
      imagem: require("../../../assets/coca.png"),
    },
    {
      nome: "Fanta Guaraná",
      preco: "R$11.99",
      imagem: require("../../../assets/fantaguarana.png"),
    },
    {
      nome: "Sprite",
      preco: "R$11.99",
      imagem: require("../../../assets/spryte.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagem} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
    </View>
  );

  const saveInput = async () => {
    try {
      await AsyncStorage.setItem("savedInput", inputValue);
      setSavedInput(inputValue);
      setInputValue("");
    } catch (error) {
      console.error("Erro ao salvar a informação:", error);
    }
  };

  const loadSavedInput = async () => {
    try {
      const savedValue = await AsyncStorage.getItem("savedInput");
      if (savedValue !== null) {
        setSavedInput(savedValue);
      }
    } catch (error) {
      console.error("Erro ao carregar a informação:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio McDonald's</Text>
      <Text style={styles.subTitle}>Faça seu pedido:</Text>

      <TextInput
        style={styles.input}
        placeholder="Observações: (ex: sem cebola...)"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />

      <TouchableOpacity style={styles.salvar} onPress={saveInput}>
        <Text style={styles.botãoTexto}>Salvar</Text>
      </TouchableOpacity>

      <Text style={styles.anotado}>Anotado: {savedInput}</Text>

      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Menu;
