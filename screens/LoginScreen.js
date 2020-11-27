import React,{ Component} from 'react';
import {Text,ScrollView,SafeAreaView, View,StyleSheet,TextInput,TouchableHighlight} from   'react-native';
export default function Login (props) {

return (
    <SafeAreaView>
    <ScrollView>
         
         <Text>EMAIL ADDRESS</Text>
         <TextInput />
         <Text>PASSWORD</Text>
         <TextInput />
         <TouchableHighlight 
         onPress={()=>props.navigation.navigate('Forgot')}
         >
                 <Text>FORGOT PASSWORD</Text>

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
          onPress={()=>props.navigation.navigate('Orders')}
          
          >
          <Text style={styles.touctext}>Login</Text>
          </TouchableHighlight>
        
        
        </View>

    </ScrollView>
    
</SafeAreaView>


);
}
const styles = StyleSheet.create({
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