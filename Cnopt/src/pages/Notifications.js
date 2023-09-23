import React from 'react';
import { View,  StyleSheet, Dimensions, ScrollView } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Navbar from '../layout/Layout';
import CustomTextButton from '../components/Button';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotificationCard from '../components/NotificationCard';

export default function Notifications({navigation}) {
    const fourElements = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
            <Navbar navigation={navigation} />
            </View>
            <View style={styles.section2}>
                <View style={styles.iconContainer}>
                    {/* <MaterialCommunityIcons
                        name={'delete'}
                        size={35}
                        color={"#03BCCD"}
                    /> */}
                </View>
                <CustomTextButton color={'#383F73'} text={'Notifications'} paddingHorizontal={'15%'} />
                <ScrollView style={styles.cards}>
                    {fourElements.map((e, i) => (
                        <View key={i}   >
                            <NotificationCard style={i === 0 ? styles.card : null}  />
                            <View style={{
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#383F73",
                                margin: 20
                            }}></View>
                        </View>
                    ))}
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
        flex: 0.95,
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
    iconContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        width: windowWidth * 0.9,
        height: "5%",
    },
    cards: {
        flex: 5,
        width: windowWidth * 0.85,
        margin: 10,

    },
    card: {
        backgroundColor: "white",
      
    },

});
