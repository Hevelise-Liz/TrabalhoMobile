import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  pesquisar: {
    position: 'absolute', 
    top: 10,  
    left: 10, 
    flexDirection: 'row', 
    
  },

  encontre:{
    justifyContent:'flex-end', 
    padding: 3,
    paddingStart: 5,
    paddingEnd:120,
    color:"#ccc" ,
   
  
  },


  emoji: {
    position: 'absolute', 
    top: 300,  
    left: 7, 
    fontSize: 25,

  },

  botão: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  

  },


});