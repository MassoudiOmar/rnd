import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Navbar({ navigation }) {
  const openDrawer = () => {
    navigation.openDrawer(); // This opens the drawer navigation
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#00B16A" />
        <TouchableOpacity onPress={openDrawer}>
          <MaterialIcons
            name={'menu'} // You can change this to any menu icon you prefer
            style={styles.icon}
            color="white"
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name={'bell'}
            color={"white"}
            style={styles.icon}
            onPress={() => { navigation.navigate('Notifications') }}
          />
          <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-101.jpg?w=2000' }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00B16A',
    justifyContent: "space-between",
    width: windowWidth,
    padding: 20,
  },
  icon: {
    fontSize: 30
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
    resizeMode: "contain",
    marginLeft: 10
  },
});
