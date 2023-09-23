import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Navbar from '../layout/Layout';
import CustomTextButton from '../components/Button';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarInput from '../components/inputs/calendarInput';
import NoteInput from '../components/inputs/NoteInput';
import PaymentCard from '../components/PaymentCard';


export default function Paiment({navigation}) {
    const fourElements = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
            <Navbar navigation={navigation} />
            </View>

            <View style={styles.section2}>
                <CustomTextButton color={'#383F73'} text={'Paiement'} paddingHorizontal={'17%'} />
            </View>
            <View style={styles.section3}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.informationView}>
                        <View style={styles.inputHolder}>
                            <Text style={{ textAlign: "left", color: "#00B16A", width: "80%", margin: 10 }}>Montant de la cotisation</Text>
                            <CalendarInput />
                        </View>

                        <View style={styles.inputHolder}>
                            <Text style={{ textAlign: "left", color: "#00B16A", width: "80%", margin: 10 }}>Année</Text>
                            <CalendarInput />
                        </View>
                        <View style={styles.inputHolder2}>
                            <Text style={{ textAlign: "left", color: "#00B16A", width: "80%", margin: 10 }}>Note</Text>
                            <NoteInput />
                        </View>
                    </View>
                    <View style={styles.paymentView}>
                        <PaymentCard />
                    </View>
                    <View style={styles.btnView}>

                        <CustomTextButton
                            text={
                                <View style={styles.buttonContent}>
                                    {/* <MaterialCommunityIcons
                                        name={'printer'}
                                        color={"white"}
                                        style={styles.icon}
                                    /> */}
                                    <Text style={styles.buttonText}>Imprimer le reçu</Text>
                                </View>
                            }
                            color={"#03BCCD"}
                            paddingHorizontal={"10%"}
                        />
                        <CustomTextButton
                            text={
                                <View style={styles.buttonContent}>
                                    {/* <MaterialCommunityIcons
                                        name={'printer'}
                                        color={"white"}
                                        style={styles.icon}
                                    /> */}
                                    <Text style={styles.buttonText}>Imprimer le relevé de la cotisation</Text>
                                </View>
                            }
                            color={"#03BCCD"}
                            paddingHorizontal={"5%"}
                        />
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
        justifyContent: "center",
        width: windowWidth,
    },
    section2: {
        flex: 1.5,
        backgroundColor: "#F6F6F6",
        alignItems: 'center',
        width: windowWidth,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: "flex-end"
    },
    section3: {
        flex: 8,
        backgroundColor: "#F6F6F6",
        alignItems: 'center',
        width: windowWidth,

    },
    scrollView: {
        flex: 1,
        width: windowWidth * 0.9,
        flexDirection: "column",
    },
    informationView: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.56,
        backgroundColor: "white",
        marginTop: "10%",
        borderRadius: 20,
        shadowOffset: {
            width: 20,
            height: 50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    inputHolder: {
        alignItems: "center",
        textAlign: "left",
        justifyContent: "center",
        flex: 1

    },
    inputHolder2: {
        alignItems: "center",
        textAlign: "left",
        justifyContent: "center",
        flex: 3

    },
    paymentView: {
        marginTop: "10%",
        borderRadius: 20,
        shadowOffset: {
            width: 20,
            height: 50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "center",
        alignItems: "center"
    },
    btnView: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: windowHeight * 0.3,
    },

    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
        color: "black"
    },
    buttonText: {
        fontSize: 17,
    },
});
