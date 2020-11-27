import React from 'react';
import {Text,View,SafeAreaView,ScrollView,StyleSheet,TouchableHighlight,TextInput} from 'react-native';
export default function Forgot(props){

    return(
        <SafeAreaView>
            <ScrollView>

         <Text>EMAIL ADDRESS</Text>
         <TextInput />
         <View style={styles.Signupview}>
         <TouchableHighlight style={styles.touchbtn} >
            <Text style={styles.touctext}>Reset</Text>

         </TouchableHighlight>
         </View>
         <View style={styles.btnview}>
        <TouchableHighlight style={styles.touchbtn}>
          <Text style={styles.touctext}>Sign up</Text>
          </TouchableHighlight>
        
          <TouchableHighlight style={styles.touchbtn} >
          <Text style={styles.touctext}>Login</Text>
          </TouchableHighlight>
        
        
        </View>

            </ScrollView>


        </SafeAreaView>

    )
}
const styles= StyleSheet.create({
container:{
    flex:1
},

Signupview:{
    justifyContent:'center'  ,
    alignItems:'center' 
   },
   btnview:{
       flexDirection:'row',
       justifyContent:'space-between',
   
   },
   touctext:{
       textAlign:'center',
       marginTop:10
       
   
   },
   
   touchbtn:{
       borderWidth:1,
      borderRadius:50,
      backgroundColor:'#42f5f2',
      height:50,
      width:100
   }


});