import React from 'react';
import {View,Text,StyleSheet,ScrollView,SafeAreaView,TouchableHighlight} from 'react-native';
import Footer from './Footer';
import {MaterialIcons} from '@expo/vector-icons'
export default function Bundle(props){
return(
<SafeAreaView style={styles.container}>
            <ScrollView>


    <Text style={styles.text}>You have 0 item in basket </Text>
    <View style={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
                    <Text style={styles.text} >You have 0 items in basket  </Text>
                    <MaterialIcons name='shopping-basket' size={40} color="#5edbcd" />
                </View>
            <Text style={styles.text}>Choose a subscription Bundle </Text>
            <View style={{borderWidth:1,marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Student Starter</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>2.5kg clothes ×3 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
                <View style={{borderWidth:1,flexDirection:'column',marginLeft:'15%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4 kg Towel,Sheet ×1</Text>
          <Text style={styles.listtext}>wash,Dry,Fold</Text>
                </View>
                <Text style={styles.listtext}>£20.00/month</Text>

            </View>

            <View style={{borderWidth:1,marginTop:'5%',marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Student Pro</Text>
                <Text>free Softener upgrade</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4kg clothes ×4 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
               
                <Text style={styles.listtext}>£30.00/month</Text>

            </View>

            <View style={{borderWidth:1,marginTop:'5%',marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Entry</Text>
                <Text>free Softener upgrade</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4kg clothes,Towels,Sheets ×2 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
               
                <Text style={styles.listtext}>£16.99.00/month</Text>

            </View>
            <View style={{borderWidth:1,marginTop:'5%',marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Regular</Text>
                <Text>free Softener upgrade</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4kg clothes ×3 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
               
                <Text style={styles.listtext}>£22.99.00/month</Text>

            </View>

            <View style={{borderWidth:1,marginTop:'5%',marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Large</Text>
                <Text>free Softener upgrade</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4kg clothes ×2 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
                <View style={{borderWidth:1,flexDirection:'column',marginLeft:'15%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4 kg Towel,Sheet ×1</Text>
          <Text style={styles.listtext}>wash,Dry,Fold</Text>
                </View>
                <Text style={styles.listtext}>£28.99.00/month</Text>

            </View>

            <View style={{borderWidth:1,marginTop:'5%',marginLeft:'10%',marginRight:'10%',alignItems:'center'}}>
                <Text style={{fontSize:20,justifyContent:'center',alignItems:'center',}}>Premium</Text>
                <Text>free Softener upgrade</Text>
                <View style={{borderWidth:1,flexDirection:'column',marginTop:'5%',marginLeft:'10%',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>8kg clothes ×2 </Text>
          <Text style={styles.listtext}>wash,Dry,Fold </Text>
                </View>
                <View style={{borderWidth:1,flexDirection:'column',marginLeft:'15%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.listtext}>4 kg Towel,Sheet ×2</Text>
          <Text style={styles.listtext}>wash,Dry,Fold</Text>
                </View>
                <Text style={styles.listtext}>£34.99.00/month</Text>

            </View>


        <Text style={styles.text}>Choose a renewel option </Text>
            <TouchableHighlight style={{borderWidth:1,height:40,width:"60%",marginLeft:'25%',marginTop:'4%'}}>
                <Text style={styles.listtext}>Automatically renew every month</Text>
           </TouchableHighlight>
           <TouchableHighlight style={{borderWidth:1,height:40,width:"60%",marginLeft:'25%',marginTop:'4%'}}>
               <Text style={styles.listtext}>Do not auto-renew</Text>
           </TouchableHighlight>
         <Text style={{justifyContent:'center',
    fontSize:20,
    marginTop:'10%',
    marginBottom:'5%'}}> *This is automaticaly renew on order date</Text>

         <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>

            <TouchableHighlight style={{borderWidth:1,height:30,width:80}} >
            <Text   style={styles.listtext} >Back</Text>

            </TouchableHighlight>
            <TouchableHighlight style={{borderWidth:1,height:30,width:80}} >
            <Text style={styles.listtext} >Next</Text>

            </TouchableHighlight>

         </View>






< Footer />
            </ScrollView>


</SafeAreaView>

);

}
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        borderBottomWidth:1,
        justifyContent:'center',
        fontSize:20,
        marginTop:'10%',
        marginBottom:'5%'
    },
    
listtext:{
    justifyContent:'center',
    textAlign:'center',
    padding:5

},



});