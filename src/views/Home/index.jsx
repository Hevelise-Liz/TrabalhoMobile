// import React from "react";
// import { View, Text, Button } from "react-native";
// import { styles } from "../Home/style";
// import { Fontisto } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons';

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.container}>

//       <View style={styles.pesquisar} >
//       <Fontisto name="search" size={24} color="black" />
//       <Text style={styles.encontre}>Encontre cupons</Text>
//       <Ionicons name="menu-outline" size={30} color="black" />
//       </View>

//       <Text style={styles.title}><strong>Recomendações pra você</strong></Text>
//       <Text style={styles.emoji}>😍</Text>
      
//       <View style={styles.botão}>
//       <Button title="Ver Menu" onPress={() => navigation.navigate
//       ("Menu")} />
//       </View>
      



//     </View>
//   );
// };
// export default Home;

import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "../Home/style";
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.pesquisar} >
        <Fontisto name="search" size={24} color="black" />
        <Text style={styles.encontre}>Encontre cupons</Text>
        <Ionicons name="menu-outline" size={30} color="black" />
      </View>

  
      <Image
        source={require('../../../assets/promo.jpg')}
        style={styles.imagemRecomendacoes}
      />
<View style={styles.pontinhos}>
  <Ionicons name="md-ellipsis-horizontal-outline" size={34} color="black" /></View>



      <Text style={styles.title}><strong>Recomendações pra você</strong></Text>
      <Text style={styles.emoji}>😍</Text>


      <Image
        source={require('../../../assets/promo2.jpg')}
        style={styles.imagem2}
      />
      
      <View style={styles.botão}>
        <Button title="Ver Menu" onPress={() => navigation.navigate("Menu")} />
      </View>
    </View>
  );
};

export default Home;
