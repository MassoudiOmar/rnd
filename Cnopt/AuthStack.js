import React,{useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReminderPage from './src/pages/ReminderPage'; // Import your Login page component
import CarouselPage from './src/pages/CarouselPage'; // Import your Carousel page component

const Stack = createStackNavigator();

const AuthStack = () => {


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Carousel"
        component={CarouselPage}
        options={{
          title: 'Carousel',
          headerShown: false, // You can hide the header if needed
        }}
      />
      <Stack.Screen
        name="ReminderPage"
        component={ReminderPage}
        options={{
          title: 'ReminderPage',
          headerShown: false, // You can hide the header if needed
        }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
