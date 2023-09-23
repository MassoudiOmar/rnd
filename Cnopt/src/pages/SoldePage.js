import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Navbar from '../layout/Layout.js';
export default function SoldePage({ navigation }) {
    const fourElements = [1, 2, 3, 4];

    return (
        <View style={styles.container}>

            <View style={styles.section1}>
                <Navbar navigation={navigation} />
            </View>
            <View style={styles.section2}>
                <TouchableOpacity style={styles.soldeActuel} >
                    <Text style={styles.soldeText}>Solde actuel de cotisations</Text>
                    <View style={styles.soldeBox}>
                        <Text style={styles.soldeNumber}>480 Dt</Text>
                    </View>

                </TouchableOpacity>
                <View style={styles.transactionList}>
                    {fourElements.map((e, i) => (
                        <View key={i} style={i !== 1 ? styles.transactionView : styles.transactionView1}>
                            <Text style={styles.date}>15 Mars 2023</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.transactionNumeroTitle} >Numéro de transaction :</Text>
                                <Text style={styles.transactionId} > #284650</Text>
                                <Text style={styles.transactionValue}> 240.000DT</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00B16A',
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
        flex: 9,
        alignItems: 'center',
        width: windowWidth,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#F6F6F6",
    },
    soldeActuel: {
        flex: 2,
        backgroundColor: "white",
        width: "80%",
        margin: 20,
        borderRadius: 20,
        alignItems: "center",
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
    transactionList: {
        flex: 4,
        width: "90%",
        alignItems: "center",
    },
    soldeBox: {
        width: "80%",

        borderRadius: 10,
        backgroundColor: "#03BCCD",
        flex: 2, margin: 20, justifyContent: "center", alignItems: "center"
    },
    soldeText: {

        flex: 1,
        fontSize: 25,
        color: "#03BCCD",
        textAlign: "center",
        width: "70%",
        fontWeight: "600",
    },
    soldeNumber: {
        fontSize: 50,
        color: "white",
        fontWeight: "600"
    },
    date: {
        color: "grey"
    },
    transactionNumeroTitle: {
        color: "#00B16A",
        fontSize: 15,
        fontWeight: "500",

    },
    transactionId: {
        color: "#383F73",
        fontWeight: "500",
        marginRight: 15
    },
    transactionValue: {
        backgroundColor: "#00B16A",
        color: "white",
        fontWeight: "500",
        borderRadius: 30,
        textAlign: "center",
        padding: 3
    },
    transactionView: {
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#00B16A",
        padding: 15,
        borderRadius: 5,
    },
    transactionView1: {
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#00B16A",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "white",
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
    }
});
