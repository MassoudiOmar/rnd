import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CustomTextButton = ({ text, onPressfunc, color, paddingHorizontal }) => {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: color ? color : '#007AFF',
    paddingHorizontal: paddingHorizontal,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressfunc}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: '4%',
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', 
    fontWeight: '600',
  },
});

export default CustomTextButton;
