import React from 'react';
import {View,Text,ScrollView,SafeAreaView,StyleSheet,TouchableHighlight,FlatList} from 'react-native';
import Footer from './Footer';
const Data=[
 {no:'3 ', price:'£7.75/pp',total:'£23.25'},
 {no:'4 ', price:'£7.50/pp',total:'£30.00'},
 {no:'5', price:'£7.50/pp',total:'£37.50'},
 {no:'6 ', price:'£7.00/pp',total:'£42.00'},
 {no:' 7', price:'£7.00/pp',total:'£49.00'},
 {no:'8 ', price:'£6.50/pp',total:'£52.00'},
 {no:'9 ', price:'£6.50/pp',total:'£58.50'},

]



export default function House(props){
return(
<SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.text}>You have 0 item in basket </Text>
            <Text style={styles.text}>Step 1 out of 9</Text>
            <Text style={styles.text}>Choose a house discount type </Text>
      <View style={{borderWidth:1,flexDirection:'column',marginTop:'10%',marginLeft:'15%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
          
      <TouchableHighlight style={{borderWidth:1,height:30,width:80,justifyContent:'center',alignItems:'center'}} >
            <Text   style={styles.listtext} >Type1</Text>

            </TouchableHighlight>
          <Text style={styles.listtext}>4 kg Towel,Sheet</Text>
          <Text style={styles.listtext}>wash,Dry</Text>
      </View>
      <View style={{borderWidth:1,flexDirection:'column',marginTop:'10%',marginLeft:'15%',marginRight:'15%',justifyContent:'center',alignItems:'center'}}>
          
      <TouchableHighlight style={{borderWidth:1,height:30,width:80,justifyContent:'center',alignItems:'center'}} >
            <Text   style={styles.listtext} >Type2</Text>

            </TouchableHighlight>
          <Text style={styles.listtext}>4 kg Clothes</Text>
          <Text style={styles.listtext}>wash,Dry,Fold</Text>
      </View>
      <Text style={styles.text} Choose the number of peopel in your house ></Text>


      <FlatList   
          
          data={Data}
          keyExtractor={(item, no) => no.toString()}
          renderItem={({item}) => 
          
          <View style={styles.flatview}>
          <Text style={styles.listtext}> {item.no}</Text>
          <Text style={styles.listtext}> {item.price}</Text>
          <Text style={styles.listtext}> {item.total}</Text>
        </View>
        }
          />
          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'10%'}}>

<TouchableHighlight style={{borderWidth:1,height:30,width:80}} >
<Text   style={styles.listtext} >Back</Text>

</TouchableHighlight>
<TouchableHighlight style={{borderWidth:1,height:30,width:80}} >
<Text style={styles.listtext} >Next</Text>

</TouchableHighlight>

</View>
          <Footer />

    </ScrollView>


</SafeAreaView>


);

}
const styles= StyleSheet.create({
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
flatview:{
    borderWidth:1 ,
     justifyContent:'center',
     textAlign:'center',
     marginLeft:'20%',
     marginRight:'20%',
     padding:5
  },



});