import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color:'white',
    backgroundColor: '#c60b18',
    paddingEnd: 35,
    paddingStart:35,
    paddingTop:10,
    paddingBottom: 10,


  },
  subTitle: {
    fontSize: 24,
    marginBottom: 10,
    backgroundColor: '#ffbc0d',
    paddingEnd: 60.5,
    paddingStart:60.5,
    paddingTop:10,
    paddingBottom: 10,




  },

  itemImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,  

  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    width: '80%',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});