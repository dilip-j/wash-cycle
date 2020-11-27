import React from 'react';
import {View,StyleSheet,ScrollView,SafeAreaView,Text,TouchableHighlight,FlatList,Image} from 'react-native';
import Footer from './Footer';
const Data=[
    {weight:' 4 kg clothes', work:'Wash,Dry,Fold', price: '£9.00'},
    {weight:'6 kg clothes', work:'Wash,Dry,Fold', price: '£11.25'},
    {weight:'8 kg clothes', work:'Wash,Dry,Fold', price: '£13.00'},
    {weight:'10 kg clothes', work:'Wash,Dry,Fold', price: '£15.50'},
    {weight:'12 kg clothes', work:'Wash,Dry,Fold', price: '£17.40'},
    {weight:'14 kg clothes', work:'Wash,Dry,Fold', price: '£20.25'},
    {weight:'16 kg clothes', work:'Wash,Dry,Fold', price: '£23.00'},
]

const Soft=[ 
    {softener : 'No softener', price: '£0.00'},
    { softener: 'Standard Softener',price:'£0.50'},
    { softener: 'Luxury softener',price: '£1.00'}

]


  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  
export default function Standalone(props){
    return(
        <SafeAreaView style={ styles.container}>
            <ScrollView>
           <Text style={styles.text}>You have 0 item in basket </Text>
            <Text style={styles.text}>Step 1 out of 9</Text>
            <View style={styles.type}>
                <Text style={styles.text}>Choose a laundry load type</Text>
                <TouchableHighlight style={styles.touchbtn}>
                    <Text style={styles.touctext}>laundry calculator</Text>
                </TouchableHighlight>
                </View>
          <View style={styles.view}>
              <TouchableHighlight style={styles.touch}>
                  <Text style={styles.touctext}>Clothes</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.touch}>
                  <Text style={styles.touctext}>Towels,Sheets</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.touch}>
                  <Text style={styles.touctext}>Duvets,Pillows</Text>
              </TouchableHighlight>
          </View>
          <Text style={styles.text}>Choose desired load weight </Text>
          <FlatList   
          
          data={Data}
          keyExtractor={(item, weight) => weight.toString()}
          renderItem={({item}) => 
          
          <View style={styles.flatview}>
          <Text style={styles.listtext}> {item.weight}</Text>
          <Text style={styles.listtext}> {item.work}</Text>
          <Text style={styles.listtext}> {item.price}</Text>
        </View>
        }
          />
       <Text style={styles.text}>Choose the content of your laundry load</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>

             <View style={{borderWidth:1,marginTop:'10%',marginLeft:'10%'}} > 
             < Image style={styles.img} source={require('../assets/colours.png')} />
                 <Text style={{marginLeft:'25%'}}>Colours</Text>   
             </View>
             <View style={{borderWidth:1,marginTop:'10%',marginRight:'10%'}}>
             < Image style={styles.img} source={require('../assets/whites.png')} />
                    <Text style={{marginLeft:'25%'}}>Whites</Text>
             </View>

       </View>
       <Text style={styles.text}>Choose a fabric softener for your laundry</Text>
       <FlatList   
          
          data={Soft}
          keyExtractor={(item, price) => price.toString()}
          renderItem={({item}) => 
          
          <View style={styles.flatview}>
          <Text style={styles.listtext}> {item.softener}</Text>
          <Text style={styles.listtext}> {item.price}</Text>
        </View>
        }
          />

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
          <Footer />
        </ScrollView>
        </SafeAreaView>

    )
}






const styles = StyleSheet.create({
container:{
    flex:1,
    marginLeft:'2%',
    marginRight:'2%'
},
text:{
    borderBottomWidth:1,
    justifyContent:'center',
    fontSize:20,
    marginTop:'10%',
    marginBottom:'5%'
},
type:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'10%'
},
view:{
    flexDirection:'row'
},
touchbtn:{
    borderWidth:1,
   borderRadius:10,
   backgroundColor:'#42f5f2',
   height:50,
   width:'30%',
   padding:5
 
},
touctext:{
    textAlign:'center',
    marginTop:10
    

},
touch:{
    borderWidth:1,
   borderRadius:10,
   backgroundColor:'#42f5f2',
   height:50,
   width:'30%',
   marginTop:'10%'
 
},
flatview:{
  borderWidth:1 ,
   justifyContent:'center',
   textAlign:'center',
   marginLeft:'20%',
   marginRight:'20%',
   padding:5
},
listtext:{
    justifyContent:'center',
    textAlign:'center',
    padding:5

},

img:{
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:80,
     marginTop:'10%',
     marginBottom:'2%'
  
  },


}); 