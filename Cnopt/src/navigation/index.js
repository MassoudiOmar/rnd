import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer';
import StackNavigation from './StackNavigation';



const Navigation = () => {
  const [check,setCheck]=useState(true)

  return (

    <DrawerNavigator />
    
  );
};

export default Navigation;
