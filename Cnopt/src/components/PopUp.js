import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet,  Platform, Image } from 'react-native';

const PopUp = ( onPress) => {
    const buttonStyle = {
        ...styles.button,
        backgroundColor: "#F9F9F9",
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={buttonStyle} onPress={onPress}>
                    <View style={styles.notificationBadge}></View>
                    <Text style={styles.notificationText}>CNOPT</Text>
                    <Text style={styles.notificationContent}>Vous avez une cotisation à payer</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logoImg.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    buttonContainer: {
        marginRight: 20, 
        
    },
    button: {
        paddingVertical: "7.5%",
        paddingHorizontal: "15%",
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
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
    notificationBadge: {
        backgroundColor: '#03BCCD',
        width: 20,
        height: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 1,
        borderColor: "white",
        borderWidth: 2
    },
    notificationText: {
        color: '#03BCCD',
        fontSize: 14,
        marginLeft: "10%"
    },
    notificationContent: {
        fontSize: 12,
        color: 'black',
        marginLeft: "10%"
    },
    logoContainer: {
        position: 'absolute', 
        left: "-10%",
        backgroundColor: "white",
        borderRadius: 15,
         ...Platform.select({
             ios: {
                 shadowColor: 'rgba(0, 0, 0, 0.2)',
                 shadowOffset: { width: 0, height: 2 },
                 shadowOpacity: 0.2,
                 shadowRadius: 4,
             },
             android: {
                 elevation: 1,
             },
         }),
        width: "20%",
        height: "70%",
        justifyContent:"center",
        alignItems:"center"
    },
    logo: {
        width: 50,
        height: 30, 
        resizeMode: "contain"
    },
});

export default PopUp;
