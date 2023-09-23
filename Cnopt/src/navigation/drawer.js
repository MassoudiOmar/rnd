import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
const window = Dimensions.get('window');
{/* dstack screens */ }
import ReminderPage from '../pages/ReminderPage';
import CarouselPage from '../pages/CarouselPage';
import ConnexionPage from '../pages/ConnexionPage';

{/* drawer screens */ }
import Notifications from '../pages/Notifications';
import SoldePage from '../pages/SoldePage';
import Paiment from '../pages/Paiment';
import Profile from '../pages/Profile';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();





const drawerIcon = ({ focused, size }, name) => {
  return (
    <AntDesign
      name={name}
      size={size}
      style={styles.Icons}
    />
  );
};

const drawerIconIII = ({ focused, size }, name) => {
  return (
    <Feather
      name={name}
      style={styles.Icons}
      size={size}
    />
  );
};

const drawerIconIIII = ({ focused, size }, name) => {
  return (
    <Ionicons
      name={name}
      style={styles.Icons}
      size={size}
    />
  );
};

const CustomDrawerContent = (props) => {
  // Access the current screen name from the navigation state
  const currentScreenName = props.state.routeNames[props.state.index];
  const { state, navigation } = props;
  console.log(state.routeNames)
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('../assets/touchscreen-pharmacy.png')}
        style={styles.drawerBackground}
      >

        <View style={state.routeNames !== "Disconnect" ? styles.drawerContentContainer : styles.drawerContentContainerI}>
          {console.log("currentScreenName:", currentScreenName)}

          <DrawerItemList
            {...props}
            labelStyle={{ color: 'white' }}
            itemStyle={{ marginVertical: 0 }}
          />
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
};



const MyTabs = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}
      drawerContent={CustomDrawerContent} // Use the custom drawer content component
    >


      <Drawer.Screen
        name="Accueil"
        component={SoldePage}
        options={{
          drawerIcon: (options) => drawerIcon(options, 'home'),
          drawerLabelStyle: {
            fontSize: window.width * 0.05,
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Cotisation"
        component={Paiment}
        options={{
          drawerIcon: (options) => drawerIconIIII(options, 'wallet-outline'),
          drawerLabelStyle: {
            fontSize: window.width * 0.05,
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: (options) => drawerIconIII(options, 'bell'),
          drawerLabelStyle: {
            fontSize: window.width * 0.05,
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: (options) => drawerIconIIII(options, 'person-outline'),
          drawerLabelStyle: {
            fontSize: window.width * 0.05,
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Disconnect"
        component={CarouselPage}
        options={{
          drawerIcon: (options) => drawerIconIII(options, 'log-out'),
          drawerLabelStyle: {
            fontSize: window.width * 0.05,
            color: 'white',
          },
        }}
      />
    </Drawer.Navigator>

  );
}
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CarouselPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ReminderPage"
          component={ReminderPage}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '', // Remove the title
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="CarouselPage"
          component={CarouselPage}
        />
        <Stack.Screen
          name="ConnexionPage"
          component={ConnexionPage}
        />
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: window.width,
    height: window.height,
    backgroundColor: "#00B16A",
  },
  drawerContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  drawerContentContainerI: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Icons: {
    color: 'white',
  },
});

export default Navigation;
