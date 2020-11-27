import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,View,Text,TouchableHighlight,Image} from 'react-native';
import{Button,Card} from 'react-native-elements';
//import {Card} from 'react-native-paper';
import Footer from './Footer';

export default function NewOrder(props){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.uptext} >You have 0 items in basket  </Text>
                <Text style={styles.uptext}>What sort of order would you like to make ?</Text>
                    <Card style={styles.card}>
                    < Image style={styles.img} source={require('../assets/standalone.png')} />
                         <Text style={styles.text}> Standalone </Text>
                         <Text style={styles.innertext}> A single laundry job </Text>

                    </Card>

                    <Card style={styles.card}>
                    < Image style={styles.img} source={require('../assets/express.png')} />
                         <Text style={styles.text}> Express Standalone</Text>
                         <Text style={styles.innertext}>Guaranteed return in 3 hourse or less </Text>

                    </Card>
                    <Card style={styles.card} >
                    < Image style={styles.img} source={require('../assets/house.png')} />
                         <Text style={styles.text} onPress={()=>props.navigation.navigate('House')}>House</Text>
                         <Text style={styles.innertext}>Get a discount if you're  doing laundry for the whole house! </Text>

                    </Card>
                    <Card style={styles.card}>
                    < Image style={styles.img} source={require('../assets/bundle.png')} />
                         <Text style={styles.text}>Bundle</Text>
                         <Text style={styles.innertext}> A discounted subscription</Text>

                    </Card>
                    <Card style={styles.card}>
                    < Image style={styles.img} source={require('../assets/custom.png')} />
                         <Text style={styles.text}>Custom Bundle</Text>
                         <Text style={styles.innertext}> A Custom discounted subscription</Text>

                    </Card>
                    <TouchableHighlight style={styles.touchbtn}  onPress={()=>props.navigation.navigate('Standalone')} >
                        <Text style={styles.touctext}>select your order</Text>
                    </TouchableHighlight>

                < Footer />
            </ScrollView>


        </SafeAreaView>


    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    
    },
    card:{
        justifyContent:'center',
        alignItems:'center'

    },
    text:{
        justifyContent:'center',
        alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:'30%',
    marginRight:'20%'
    },
    innertext:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'2%',
        marginBottom:'5%',
        marginLeft:'30%',
        marginRight:'20%'
    },
    
    img:{
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:80,
        marginLeft:'35%',
        marginRight:'20%',
         marginTop:'10%',
         marginBottom:'2%'
      
      },
      touctext:{
        textAlign:'center',
        marginTop:10
        
    
    },
    
    touchbtn:{
        borderWidth:1,
       borderRadius:10,
       backgroundColor:'#42f5f2',
       height:50,
       width:'50%',
       marginTop:'10%',
       marginLeft:'25%'
    },
    
    uptext:{
        marginTop:'10%',
        justifyContent:'center',
      borderBottomWidth:1,
      
      fontWeight:'bold',
      fontSize:20 
    }




});