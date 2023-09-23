import React from 'react';
import { View, Text, StyleSheet,  Dimensions, ImageBackground ,StatusBar} from 'react-native';
import CustomTextButton from "../components/Button.js"
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import PasswordInput from '../components/inputs/PasswordInput.js';
import CheckInput from '../components/inputs/CheckInput.js';
export default function ConnexionPage({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#00B16A" />

            <ImageBackground source={require('../assets/touchscreen-pharmacy.png')} style={styles.section1}>

                <Text style={{ color: "white", fontSize: 30, fontWeight: 500, marginBottom: 10 }}>Connexion</Text>
                <Text style={{ textAlign: "center", padding: 10, color: "white" }}>Saisissez vos identifiants de connexion pour
                    accéder à votre compte</Text>
            </ImageBackground>

            <View style={styles.section2}>


                <CheckInput
                    placeholder="Enter text here"
                    value={"Numéro d'inscription"}
                    shadow={true}

                />

                <PasswordInput
                    placeholder="Enter text here"
                    value={"Numéro d'inscription"}
                    shadow={true}
                />
                <CustomTextButton text="SE CONNECTER" color={'#205072'} paddingHorizontal={"20%"} onPressfunc={() => navigation.navigate('ReminderPage')}/>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',  
        backgroundColor: '#fff',
    },
    section1: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#00B16A",
        width: windowWidth,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    section2: {
        flex: 1,  
        alignItems: 'center',
        justifyContent: "space-evenly",
    },

});
