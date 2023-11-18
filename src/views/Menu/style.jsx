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
    paddingEnd: 34,
    paddingStart: 34,
    paddingTop: 5,
    paddingBottom: 5,
  },
  subTitle: {
    fontSize: 19,
    marginBottom: 5,
    backgroundColor: "#ffbc0d",
    paddingEnd: 78,
    paddingStart: 78,
    paddingTop: 5,
    paddingBottom: 5,
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

   backgroundColor: "#ffbc0d",
   borderWidth: 2,
   borderColor: "#888",
   borderRadius: 5,
   padding:3,
   margin: 3,

},


anotado:{
  justifyContent: 'center',
  width:"100%",
 
  borderWidth: 2,
  borderColor: "#888",
borderRadius: 5,
  paddingBottom: 10,


}


});
