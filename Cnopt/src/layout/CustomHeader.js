import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBack}>
      <Image
        source={require('../assets/icon.png')}
        style={{ width: 30, height: 30, marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
};

export default CustomHeader;
