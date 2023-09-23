import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const NoteInput = () => {
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="#aaa"
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        height: "60%",

        backgroundColor: 'white',
        width: "80%",
         ...Platform.select({
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
    },
    input: {
        flex: 1,
        color: '#333',
        paddingRight: 10,
        fontSize: 16,
    },

});

export default NoteInput;
