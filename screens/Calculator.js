import React, { useState } from 'react';
import {Text,View,StyleSheet,SafeAreaView,ScrollView,FlatList} from 'react-native';
import {Ionicons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {Icon} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';

//import styles from "./calc.css";
const Data=[
{name:'Thick Towel',weight:'0.95'},
{name:'Duvet cover',weight:'0.80'},
{name:'pillow case',weight:'0.10'},
{name:'T-shirt',weight:'0.15'},

]

export default function Calculator(props){
    const [count,setCount]=useState(0);
    const [result,setResult]=useState(0);
    
    
    const increment = () => {
       setCount(count + 1);
       setResult(result + 0.95);
        }

     const decrement =()=>{
         if(count>=1){
         setCount(count - 1);
         setResult(result-0.95);
         }
     }   

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.text}>Laundry Calculator</Text>
               <View style={{borderWidth:1,height:50}}>
             <View style={{flexDirection:'row'}}>
             <TouchableHighlight style={{height:50,width:50,justifyContent:'center'}}
             onPress={decrement}
             >
             <AntDesign name='minus' size={30}/>
             </TouchableHighlight>


    <Text style={{borderWidth:1,height:50,width:50,justifyContent:'center',fontSize:30,textAlign:'center'}} >{count}</Text>



               <TouchableHighlight style={{height:50,width:50,justifyContent:'center'}} onPress={increment}>
               <Icon name="add" size={30} />
               </TouchableHighlight>


               <FlatList   
          
          data={Data}
          keyExtractor={(item, name) => name.toString()}
          renderItem={({item}) => 
    <Text style={{marginLeft:'10%',fontSize:15,marginTop:'2%'}}>{item.name}</Text>
          
        }
          />
               
    <Text style={{marginLeft:'15%',borderWidth:1,height:40,width:60,textAlign:'center'}}>{result}kg</Text>
             </View>
               
               </View>

            </ScrollView>


        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
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


});