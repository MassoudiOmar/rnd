import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckInput = ({ width, shadow }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const containerStyles = [
        styles.container,
        width ? { width } : { width: '80%' },
        shadow && Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 10,
            },
        }),
    ];
    return (
        <View style={containerStyles}>

            <TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Numéro d'inscription"
                placeholderTextColor="#aaa"
            />
            {/* <MaterialCommunityIcons
                name={showPassword ? 'check-circle' : 'check-circle'}
                size={24}
                color={showPassword ? "#00B16A" : "#aaa"}
                style={styles.icon}
                onPress={toggleShowPassword}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 14,
        backgroundColor: 'white',

    },
    input: {
        flex: 1,
        color: '#333',
        paddingVertical: 13,
        paddingRight: 10,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
});

export default CheckInput;
