import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 5,
    color: "white",
    backgroundColor: "#c60b18",
    width:"98%",
   
    paddingEnd: 24,
    paddingStart: 24,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 2,
   borderColor: "#888",
   borderRadius: 5,
   fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 19,
    marginBottom: 5,
    backgroundColor: "#ffbc0d",
    width:"98%",
    
    paddingEnd: 70,
    paddingStart: 70,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 2,
   borderColor: "#888",
   borderRadius: 5,
   fontWeight: 'bold',
  },

  itemImage: {
    width: 170,
    height: 150,

    resizeMode: "cover",
    borderRadius: 8,
  },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    width: "80%",
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
  },



  input: {
    justifyContent: 'center',
    
      fontSize: 14,
width:"100%",
    height: 80,
      margin: 1,
      color: "#888",
      paddingEnd: 35,
      paddingStart: 35,
      paddingTop: 1,
      paddingBottom: 1,

  },

salvar: {

 justifyContent: 'center',

 backgroundColor: "#c60b18",
   borderWidth: 2,
   borderColor: "#888",
   borderRadius: 5,
   paddingEnd: 10,
   paddingStart: 10,
   margin: 3,
  
  },
  botãoTexto:{
    color: "white",

  },


anotado:{
  justifyContent: 'center',
  width:"98%",
  backgroundColor: "#ffbc0d",
  borderWidth: 2,
  borderColor: "#888",
borderRadius: 5,
  paddingBottom: 10,
  paddingStart: 5,
  paddingTop:3,


}


});
