import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Navbar from '../layout/Layout';
import CustomTextButton from '../components/Button';
import CheckInput from '../components/inputs/CheckInput';
import PasswordInput from '../components/inputs/PasswordInput';

export default function Profile({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
            <Navbar navigation={navigation} />
            </View>

            <View style={styles.section2}>
                <CustomTextButton color={'#383F73'} text={'Profile'} paddingHorizontal={'20%'} />
            </View>

            <View style={styles.section3}>

                <TouchableOpacity style={styles.imageView}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-101.jpg?w=2000' }}
                        style={styles.profileImage}
                    />
                    <Text style={{ fontWeight: '600' }}>Changer la photo</Text>
                </TouchableOpacity>

                <View style={styles.divider}></View>
                <ScrollView style={{ flex: 1, width: windowWidth * 0.8 }}>

                    <Text style={styles.infoText}>Changer le Nom</Text>
                    <CheckInput width={"100%"} />
                    <Text style={styles.infoText}>Changer Mot de passe</Text>
                    <PasswordInput width={"100%"} />
                    <Text style={styles.infoText}>Confirmer Mot de passe</Text>
                    <PasswordInput width={"100%"} />
                    <View style={{margin:20}}>

                    <CustomTextButton text={"Enregistrer"} color={"#383F73"} paddingHorizontal={"20%"} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00B16A',
    },
    section1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
    },
    section2: {
        flex: 1.5,
        backgroundColor: "#F6F6F6",
        alignItems: 'center',
        width: windowWidth,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'flex-end',
    },
    section3: {
        flex: 8,
        backgroundColor: "#F6F6F6",
        alignItems: 'center',
        width: windowWidth,
    },
    imageView: {
        flex: 1,
        width: windowWidth * 0.8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#00B16A",
        margin: 20,
        height: "1px",
        width: windowWidth * 0.8
    },
    selfInformation: {
        flexGrow: 1,
        backgroundColor: 'white',
        width: windowWidth * 0.8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,

    },
    profileImage: {
        width: "80%", 
        height: "80%",
        borderRadius: 10,  
        resizeMode: "contain",
    },
    infoText: {
        fontWeight: '600',
        marginVertical: 10,
        color: '#00B16A',

    },
});
