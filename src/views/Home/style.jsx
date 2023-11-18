import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    position: "absolute",
    fontSize: 24,
    marginBottom: 20,
    top: 310,

  },

  pesquisar: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
  },

  encontre: {
    justifyContent: "flex-end",
    padding: 3,
    paddingStart: 5,
    paddingEnd: 120,
    color: "#ccc",
  },

  emoji: {
    position: "absolute",
    top: 340,
    left: 7,
    fontSize: 25,
  },

  botão: {
    position: "absolute",
    start: 70,
    bottom: 10,
   
  },

  botãoTexto:{
    fontSize: 12,

  },

  imagemRecomendacoes: {
    position: "absolute",
    top: 50,
    width: 290,
    height: 210,
    
    
  },

pontinhos:{
  position: "absolute",
  top: 260,

},

imagem2: {
  position: "absolute",
  top: 390,
  width: 297,
  height: 130,
},

footerHome:{
  position: "absolute",
  bottom: 10,
  fontSize: 12,
  start: 20,
},

footerCupons:{
  position: "absolute",
  bottom: 10,
    fontSize: 12,
    start: 135,
},

footermeuM:{
  position: "absolute",
  bottom: 10,
  fontSize: 12,
  start: 195,
},

footerMais:{
  position: "absolute",
  bottom: 10,
  fontSize: 12,
  start: 250,
},

});
