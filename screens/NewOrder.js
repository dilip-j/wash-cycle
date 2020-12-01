import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableHighlight, Image, Alert, Button } from 'react-native';
import { Card, colors } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
//import {Card} from 'react-native-paper';
import Footer from './Footer';
import Header from './header';

var r1 = '#5ae8ed';
var r2 = 'black';
export default function NewOrder(props) {
    const [value, setValue] = useState(false);
    const [pageValue, setPageValue] = useState('');
    const [red, setClr] = useState(false);
    const [data, setData] = useState('select your order')

    const inValue = () => {
        setClr(true)
        setData('next')
    }
    const select = () => {



        console.log("in select func", pageValue);
        if (pageValue !== '' && pageValue === "Standalone") {
            console.log("in if of select");
            setData('next')
            props.navigation.navigate('Standalone')

        }
        else if (pageValue !== '' && pageValue === 'House') {
            
            console.log("in if of select");
            setData('next')
            props.navigation.navigate('House')
        } else if (pageValue !== '' && pageValue === 'Bundle') {
            console.log("in if of select");
            setData('next')
            props.navigation.navigate('Bundle')
        } else {
            console.log("in else of select");
            Alert.alert('please select any order ')
        }

    }

    console.log("value????", pageValue);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.uptext} >You have 0 items in basket  </Text>
                    <MaterialIcons name='shopping-basket' size={40} color="#5edbcd" />
                </View>
                <Text style={styles.uptext}>What sort of order would you like to make ?</Text>

                <TouchableOpacity onPress={() => setPageValue('Standalone')} >
                    <Card style={styles.card}>
                        < Image style={styles.img} source={require('../assets/standalone.png')} />
                        <Text style={styles.text} /* onPress={() => props.navigation.navigate('Standalone')} */> Standalone </Text>
                        <Text style={styles.innertext}> A single laundry job </Text>

                    </Card>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => setPageValue('Standalone')}>

                    <Card style={styles.card}>
                        < Image style={styles.img} source={require('../assets/express.png')} />
                        <Text style={styles.text} /* onPress={() => props.navigation.navigate('Standalone')} */> Express Standalone</Text>
                        <Text style={styles.innertext}>Guaranteed return in 3 hourse or less </Text>

                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageValue('House')}>
                    <Card style={{...styles.card,borderColor: red ? r1 : r2}} onPress={inValue} >
                        < Image style={styles.img} source={require('../assets/house.png')} />
                        <Text style={styles.text} /* onPress={() => props.navigation.navigate('House')} */>House</Text>
                        <Text style={styles.innertext}>Get a discount if you're  doing laundry for the whole house! </Text>

                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPageValue('Bundle')}>
                    <Card style={styles.card}>
                        < Image style={styles.img} source={require('../assets/bundle.png')} />
                        <Text style={styles.text} /*onPress={() => props.navigation.navigate('Bundle')}*/ >Bundle</Text>
                        <Text style={styles.innertext}> A discounted subscription</Text>

                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPageValue('Standalone')}>
                    <Card style={styles.card}>
                        < Image style={styles.img} source={require('../assets/custom.png')} />
                        <Text style={styles.text} /*onPress={() => props.navigation.navigate('Standalone')}*/ >Custom Bundle</Text>
                        <Text style={styles.innertext}> A Custom discounted subscription</Text>

                    </Card>
                </TouchableOpacity>
                 
                <TouchableHighlight  style={styles.touchbtn} onPress={select}>
                
                    <Text style={styles.touctext}>{data}</Text>

                </TouchableHighlight>
        
            

                < Footer />
            </ScrollView>


        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    card: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '20%'
    },
    innertext: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '5%',
        marginLeft: '30%',
        marginRight: '20%'
    },

    img: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        marginLeft: '35%',
        marginRight: '20%',
        marginTop: '10%',
        marginBottom: '2%'

    },
    touctext: {
        textAlign: 'center',
        marginTop: 10


    },

    touchbtn: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor:'#5aede8',
        height: 50,
        width: '80%',
        marginTop: '10%',
        marginLeft: '10%'
    },

    uptext: {
        marginTop: '10%',
        justifyContent: 'center',
        borderBottomWidth: 1,

        fontWeight: 'bold',
        fontSize: 20
    }




});