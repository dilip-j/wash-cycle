import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,View,Text} from 'react-native';
import Footer from './Footer';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import{FontAwesome} from '@expo/vector-icons'

export default function Profile(props){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.headtext}>Your Profile Page </Text>
                 <TouchableHighlight style={styles.btn} >
                     <FontAwesome name='Feather' />
                     <Text style={styles.btntext}>USER DETAILS</Text>
                     </TouchableHighlight> 
                     <TouchableHighlight >
                     
                     <Text>BILLING</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                     
                     <Text>ADDRESSES</Text>
                     </TouchableHighlight>

                < Footer />
            </ScrollView>


        </SafeAreaView>


    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    headtext:{
fontSize:30,
justifyContent:'center',
alignItems:'center',
marginTop:'20%'
 },
 btn:{
     borderWidth:1,
     borderRadius:15,
     marginLeft:'20%',
     marginRight:'20%',
     height:40,
     flexDirection:'row'
     
 },
 btntext:{
    textAlign:'center',
    marginTop:'3%'

 }



});