import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,View,Text,Image} from 'react-native';
import{Button,Card} from 'react-native-elements';
//import {Card } from 'react-native-paper';

import Footer from './Footer';
export default function Orders(props){ 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.Btext}>BUNDLES</Text>
                <Card >
                  
                < Image style={styles.img} source={require('../assets/bundle.png')} />
                <Text style={styles.text}>You dont have any bundles</Text>
                <Text style={styles.innertext}> Using us a lot ? why not save yourself some money and and grab  yourself a bundle subscription </Text>
                <Button  title="New Bundel" onPress={()=>props.navigation.navigate('NewOrder')} />
                </Card>
                <View>
                    <Text style={styles.text}>SHOW ONLY OPEN ORDER </Text>

                </View>
                <View style={styles.live}>
                <Text style={styles.Btext}>ORDERS</Text>
                <Button  
                 style={styles.liveb}
                
                title="live" type= "outline"/>
                </View>
                <Card >
                < Image style={styles.img} source={require('../assets/bundle.png')} />
                <Text style={styles.text}>You dont have any orders</Text>
                <Text style={styles.innertext}> Let's fix that! put your feet up and let someone else tale care of your loundry </Text>
                <Button  title="New order" onPress={()=>props.navigation.navigate('NewOrder')} />
                </Card>
                

                < Footer />

            </ScrollView>


        </SafeAreaView>


    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
       
    },
    Btext:{
        fontSize:30,
        marginTop:'10%',
        marginLeft:0,
    },
    card:{
        justifyContent:'center',
        alignItems:'center',
    },
    live:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    liveb:{
        marginTop:'10%'
    },
    text:{
        justifyContent:'center',
    fontSize:20,
    fontWeight:'bold',
    
    },
    innertext:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%',
        marginBottom:'5%'
    },
    img:{
      justifyContent:'center',
      alignItems:'center',
      width:150,
      height:150,
      marginLeft:'25%',
      marginRight:'20%',
       marginTop:'10%',
       marginBottom:'10%'
    
    }



});