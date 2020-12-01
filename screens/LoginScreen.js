import React from 'react';
import { Text, ScrollView, SafeAreaView, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';

export default function Login(props) {

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                < Image style={styles.img} source={require('../assets/logo-white.png')} />
                <Text style={{ fontSize: 35, fontWeight: 'bold', justifyContent: 'center', marginLeft: '25%', color: 'white' }}> WashCycle</Text>
                <Text style={{ fontSize: 15, justifyContent: 'center', marginLeft: '28%', color: '#58b09a' }}>Delivery Laundry Service</Text>
                <Text style={styles.text}>EMAIL ADDRESS</Text>
                <TextInput style={styles.inputtext} />
                <Text style={styles.text}>PASSWORD</Text>
                <TextInput style={styles.inputtext} />
                <TouchableHighlight
                    onPress={() => props.navigation.navigate('Forgot')}
                >
                    <Text style={styles.forget}>FORGOT PASSWORD</Text>

                </TouchableHighlight>


                <View style={styles.Signupview}>
                    <TouchableHighlight style={styles.touchbtn}>
                        <Text style={styles.touctext}>Login up</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btnview}>
                    <TouchableHighlight style={styles.touchbtn}>
                        <Text style={styles.touctext}>Sign up</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.touchbtn}
                        onPress={() => props.navigation.navigate('Orders')}

                    >
                        <Text style={styles.touctext}>Login</Text>
                    </TouchableHighlight>


                </View>

            </ScrollView>

        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1a13'

    }
    ,
    text: {
        color: 'white',
        marginLeft: '5%',
        padding: 10,
        fontSize: 20

    },
    forget: {


        color: '#34bdeb',
        marginLeft: '5%',
        padding: 10,
        fontSize: 20
    },
    inputtext: {
        color: 'white',
        marginLeft: '5%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginRight: '5%',
        fontSize: 18

    },
    Signupview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    btnview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%'

    },
    touctext: {
        textAlign: 'center',
        marginTop: 10


    },

    touchbtn: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#42f5f2',
        height: 50,
        width: 150
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        marginLeft: '35%',
        marginRight: '40%',
        marginTop: '15%',
        marginBottom: '3%'

    }



});