import React, { useState } from 'react';
import {  View, StyleSheet, Dimensions, Image } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import CustomTextButton from './Button';
import { CheckBox } from 'react-native-elements';

const paymentCard = () => {
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);

    return (
        <View style={styles.container}>
            <CustomTextButton text={"Mode de paiement"} color={"#00B16A"} paddingHorizontal={'13%'} />
            <View style={styles.paymentCard}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        checked={isChecked1}
                        onPress={() => setChecked1(!isChecked1)}
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        uncheckedColor="black"
                    />
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1158px-Mastercard-logo.svg.png' }}
                        style={styles.image}
                    />
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title="En espèce"
                        checked={isChecked2}
                        onPress={() => setChecked2(!isChecked2)}
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        uncheckedColor="black"

                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title="Par chèque"
                        checked={isChecked3}
                        onPress={() => setChecked3(!isChecked3)}
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        uncheckedColor="black"

                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        title="Par virement"
                        checked={isChecked4}
                        onPress={() => setChecked4(!isChecked4)}
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        uncheckedColor="black"

                    />
                </View>
            </View>
            <CustomTextButton text={"CONFIRMER"} color={"#383F73"} paddingHorizontal={'20%'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center', 
    },
    paymentCard: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.5,
        backgroundColor: '#aed6bc',
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "flex-start"
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderRadius: 200,
        overflow: 'hidden',
        marginBottom: 10, 
        flexDirection: "row", 
        alignItems: "center" 
    },
    checkbox: {
        borderWidth: 0, 
        padding: 0, 
        margin: 0, 
        backgroundColor: 'transparent',
    },
    checkboxText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: "black",
        textAlign: "left"
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        marginLeft: 10
    },
});

export default paymentCard;
