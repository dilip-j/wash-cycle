import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,View,Text} from 'react-native';
import Footer from './Footer';
import {Button} from 'react-native-elements'

export default function Profile(props){
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Your Profile Page </Text>
                 <Button style={{marginTop:20}} titile="USER DETAILS" />
                 <Button  title="BILLING" type="outline"/>
                 <Button title="ADDRESSES" type="outline"/>

                < Footer />
            </ScrollView>


        </SafeAreaView>


    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }



});