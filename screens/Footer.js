import React from 'react';
import {Text,View,SafeAreaView, StyleSheet,Image} from 'react-native';
export default function Footer(props){
return (
    
    <View>
        <View style={{borderBottomWidth:1,marginBottom:'5%',marginTop:'5%'}}></View>
        < Image style={styles.img} source={require('../assets/logo-dark.png')} />
     <Text>
      Copyright © Wash cycle LTD 2020. all rights reserved. you the customer,are responsible for ensuring that only items that can withStand a wash are used
      with our service. we will not check for any item left in pockets or item of clothing that cannot withstand our washing process

     </Text>
     <Text>Flat 3,53 Richmond House ,Richmond Road ,Roath,</Text>
     </View>
     

);

}
const styles =StyleSheet.create({
container:{
    flex:1
},
img:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    marginLeft:'35%',
    marginRight:'40%',
     marginTop:'10%',
     marginBottom:'10%'
  
  }

});