import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity,StatusBar } from 'react-native';
import CustomTextButton from "../components/Button.js"
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import PopUp from '../components/PopUp.js';
export default function ReminderPage({navigation}) {
    
    return (
        <View style={styles.container}>
                        <StatusBar backgroundColor="white" />

            <View style={styles.section1}>
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: 'bold', color: "#205072" }}>
                    Activer{'\n'}les notifications
                </Text>
            </View>
            <View style={styles.section2}>
                <ImageBackground style={styles.slideImage} source={require('../assets/half-phone.png')}>
                    <View style={styles.notificationCardContainer}>
                        <PopUp />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.section3}>
                <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ccc", height: "10%", marginTop: "5%", width: "100%" }}>
                    {/* <MaterialCommunityIcons
                        name={'check-circle'}
                        size={24}
                        color={"#00B16A"}
                        style={styles.icon}
                    /> */}
                    <Text style={{ marginLeft: 10 }}>Lorem ipsum dolor sit amet</Text>
                </View>
                <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ccc", height: "10%", marginTop: "5%", width: "100%" }}>
                    {/* <MaterialCommunityIcons
                        name={'check-circle'}
                        size={24}
                        color={"#00B16A"}
                        style={styles.icon}
                    /> */}
                    <Text style={{ marginLeft: 10 }}>Lorem ipsum dolor sit amet</Text>
                </View>
                <View style={{ flexDirection: "row", height: "10%", marginTop: "5%", width: "100%" }}>
                    {/* <MaterialCommunityIcons
                        name={'check-circle'}
                        size={24}
                        color={"#00B16A"}
                        style={styles.icon}
                    /> */}
                    <Text style={{ marginLeft: 10 }}>Lorem ipsum dolor sit amet</Text>
                </View>

                    <CustomTextButton text={"ACTIVER"} paddingHorizontal={"30%"} color={"#00B16A"} onPressfunc={() => navigation.navigate('Tabs')} />
                    <TouchableOpacity onPress={() => navigation.navigate('SoldePage')} style={{marginTop:"5%"}} ><Text>Ignorer</Text></TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
    section1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: windowWidth,
    },
    section2: {
        flex: 2,
        alignItems: 'center',
        width: windowWidth,
    },
    section3: {
        flex: 3,
        alignItems: 'center',
        width: windowWidth * 0.85,
        backgroundColor: "#ffffffa8",
    },
    slideImage: { width: windowWidth * 0.8, height: windowHeight },
    notificationCardContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: "30%"
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1
    },
});

