import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
//import {Card } from 'react-native-paper';
import Header from './header';

import Footer from './Footer';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function Orders(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Text style={styles.Btext}>BUNDLES</Text>
                <Card >

                    < Image style={styles.img} source={require('../assets/bundle.png')} />
                    <Text style={styles.text}>You dont have any bundles</Text>
                    <Text style={styles.innertext}> Using us a lot ? why not save yourself some money and and grab  yourself a bundle subscription </Text>
                    

                    <TouchableHighlight style={styles.bundlebtn} onPress={() => props.navigation.navigate('NewOrder')}>
                        <Text style={styles.bundletext}>New Bundel</Text>
                    </TouchableHighlight>
                </Card>
                <View>
                    <Text style={{ fontSize: 20, marginTop: '5%', marginLeft: '3%' }}>SHOW ONLY OPEN ORDER </Text>

                </View>
                <View style={styles.live}>
                    <Text style={styles.Btext}>ORDERS</Text>
                    <TouchableHighlight style={styles.touchbtn}>
                        <Text style={styles.touchtext}>LIVE</Text>
                    </TouchableHighlight>

                </View>
                <Card >
                    < Image style={styles.img} source={require('../assets/orders.png')} />
                    <Text style={styles.text}>You dont have any orders</Text>
                    <Text style={styles.innertext}> Let's fix that! put your feet up and let someone else tale care of your loundry </Text>


                    <TouchableHighlight style={styles.orderbtn} onPress={() => props.navigation.navigate('NewOrder')}>
                        <Text style={styles.ordertext}>New Order</Text>
                    </TouchableHighlight>


                </Card>


                < Footer />

            </ScrollView>


        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Btext: {
        fontSize: 20,
        letterSpacing:2,
        marginTop:'3%',
    

        marginLeft: '5%',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    live: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    liveb: {
        marginTop: '10%',

    },
    text: {
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',

    },
    innertext: {
        justifyContent: 'center',
        alignItems: 'center',
    
        marginTop: '3%',
        marginBottom: '5%',
        fontSize: 20
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginLeft: '35%',
        marginRight: '20%',
        marginTop: '10%',
        marginBottom: '10%'

    },
    touchtext: {
        textAlign: 'center',
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        color: '#5eeb84',
        fontSize: 15


    },

    touchbtn: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 40,
        width: 70,
        borderColor: '#25c24c'
    },
    orderbtn: {
        backgroundColor: '#2ECC71',
        borderRadius: 6,
        height: 50,
        width: '50%',
        marginTop: '6%',
        marginLeft: '25%',
        marginBottom: '10%'
    },

    ordertext: {
        textAlign: 'center',
        color: 'white',
        marginTop: '5%',
        fontSize: 20
    },
    bundlebtn:{

        backgroundColor: '#03BAD4',
        borderRadius: 6,
        height: 50,
        width: '50%',
        marginTop: '6%',
        marginLeft: '25%',
        marginBottom: '10%'  
    },
    bundletext:{

        textAlign: 'center',
        color: 'white',
        marginTop: '5%',
        fontSize: 20
    }




});