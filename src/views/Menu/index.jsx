// import React from 'react';
// import { View, Text, FlatList, source } from 'react-native';
// import { styles } from './style';



// const Menu = () => {
//   const menuData = [


//     { id: '1', nome: 'Cheddar McMelt', preco: 'R$24.99' },
//     { id: '2', nome: 'Big Tasty', preco: 'R$24.99' },
//     { id: '3', nome: 'McChicken', preco: 'R$19.99' },
//     { id: '4', nome: 'Chicken McNuggets', preco: 'R$15.99' },
//     { id: '5', nome: 'Big Mac', preco: 'R$19.99' },
//     { id: '6', nome: 'Mc Fritas', preco: 'R$15.99' },

   
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.itemName}>{item.nome}</Text>
//       <Text style={styles.itemPrice}>{item.preco}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cardápio McDonald's</Text>
//       <Text style={styles.subTitle}>Faça seu pedido:</Text>
//       <FlatList
//         data={menuData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// export default Menu;





import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './style';

const Menu = () => {
  const menuData = [

    { id: '1', nome: 'Cheddar McMelt', preco: 'R$24.99', imagem: require('../../../assets/cheedar.png') },
    { id: '2', nome: 'Big Tasty', preco: 'R$29.99', imagem: require('../../../assets/tasty.png') },
    { id: '1', nome: 'McChicken', preco: 'R$14.99', imagem: require('../../../assets/chicken.png') },
    { id: '2', nome: 'Chicken McNuggets', preco: 'R$15.99', imagem: require('../../../assets/nugget.png') },
    { id: '1', nome: 'Big Mac', preco: 'R$21.99', imagem: require('../../../assets/bigMac.png') },
    { id: '2', nome: 'Mc Fritas', preco: 'R$11.99', imagem: require('../../../assets/fritas.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagem} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio McDonald's</Text>
      <Text style={styles.subTitle}>Faça seu pedido:</Text>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Menu;
