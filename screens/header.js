import React from 'react';
import {View ,StyleSheet,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function Header (props){
    return(
    <View style={styles.view}>
        < Image style={styles.logo} source={require('../assets/logo-white.png')} />
        <MaterialCommunityIcons  name='login-variant' size={30} style={{marginTop:'5%',marginRight:'3%',color:'white'}}/>
     </View>   
    );
}
const styles=StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#091F3F',
        marginTop:'5%',
        width:'100%',
        height:80,
        

    },

    logo: {
    
        width: 50,
        height: 50,
        marginLeft:'3%',
        marginTop:'3%'
    
}
});