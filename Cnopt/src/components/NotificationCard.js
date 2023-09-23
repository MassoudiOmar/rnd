import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const NotificationCard = ({ style }) => {


    return (
        <View style={[styles.container, style]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>

                <Text style={styles.CNOPT}>CNOPT</Text>
                <Text style={styles.line}></Text>
                <Text style={styles.date}>15 Mars 2023</Text>
            </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et do</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,

        padding: "5%"

    },
    CNOPT: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00B16A",
        textAlign: "center",
    },
    line: {
        backgroundColor: "#00B16A",
        width: "30%",
        height: "1%",
        margin: 10,

    },
    date: {
        color: "grey",
        textAlign: "center",
    },
    text: {
        color: "#205072",
        margin: 10
    }

});

export default NotificationCard;
