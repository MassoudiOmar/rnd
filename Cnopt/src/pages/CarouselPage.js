import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import Carousel from "../components/carousel.js"
import CustomTextButton from "../components/Button.js"
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


export default function CarouselPage({ navigation }) {

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="white" />

            <View style={styles.section1}>
                <Image style={styles.slideImage} source={(require('../assets/logoImg.png'))} resizeMode="contain" ></Image>
                <View style={{ justifyContent: "space-around" }}>

                    <Text style={{ textAlign: "center", color: "#383F73", fontSize: 25, fontWeight: 500 }}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit</Text>
                    <Text style={{ textAlign: "center", color: "#00B16A", fontSize: 20, width: windowWidth * 0.9, padding: 10 }}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing </Text>
                </View>
            </View>
            <View style={[styles.section, styles.section2]}>
                <Carousel />
            </View>
            <View style={styles.section}>

            <CustomTextButton text="COMMENCER" color={'#00B16A'} paddingHorizontal={'25%'} onPressfunc={() => navigation.navigate('ConnexionPage')} />
                <View style={{ flexDirection: "row", padding: 10 }}>

                    <Text style={{ color: "#00B16A" }}>Vous avez déjà un compte?</Text>
                    <Text> S'identifier</Text>
                </View>
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
        flex: 2,  
        alignItems: 'center',
        justifyContent: "center",
    },
    section: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    section2: {
        flex: 2, 
    },
    slideImage: { width: windowWidth * 0.4, height: windowHeight * 0.2 },

});
