import React ,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableHighlight, Alert } from 'react-native';
import Footer from './Footer';
import Header from './header';
import { MaterialIcons } from '@expo/vector-icons'
export default function Bundle(props) {
    const [pageValue, setPageValue] = useState('');
    const [data, setData] = useState('SELECT BUNDLE');
    const [renew,setRenew]=useState('auto_renew')
    const select = () => {
        if (pageValue !== '' && pageValue === "Student_Starter") {
            console.log("in if of select",pageValue);
            console.log(renew)
            setData('Next')
            props.navigation.navigate('Payment')

        }
        else if(pageValue !=='' && pageValue ==='Student_pro')
        {

            console.log("in if of select",pageValue);
            setData('Next')
            props.navigation.navigate('Payment')    
        }
        else if(pageValue !=='' && pageValue ==='Entry')
        {

            console.log("in if of select",pageValue);
            setData('Next')
            props.navigation.navigate('Payment')    
        }
         
        else if(pageValue !=='' && pageValue ==='Regular')
        {

            console.log("in if of select",pageValue);
            setData('Next')
            props.navigation.navigate('Payment')    
        }
        else if(pageValue !=='' && pageValue ==='Large')
        {

            console.log("in if of select",pageValue);
            setData('Next')
            props.navigation.navigate('Payment')    
        }
        else if(pageValue !=='' && pageValue ==='Premium')
        {

            console.log("in if of select",pageValue);
            setData('Next')
            props.navigation.navigate('Payment')    
        }
         


        
        else{
            Alert.alert('please select any bundle')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text} >You have 0 items in basket  </Text>
                    <MaterialIcons name='shopping-basket' size={40} color="#5edbcd" />
                </View>
                <Text style={styles.text}>Choose a subscription Bundle </Text>
                <TouchableHighlight onPress={()=>setPageValue('Student_Starter')}>
                <View style={{ borderWidth: 1, marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                   
                   
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Student Starter</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>2.5kg clothes ×3 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginLeft: '15%', marginRight: '15%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4 kg Towel,Sheet ×1</Text>
                        <Text style={styles.listtext}>wash,Dry,Fold</Text>
                    </View>
                    <Text style={styles.listtext}>£20.00/month</Text>

                </View>
                </TouchableHighlight>



                <TouchableHighlight onPress={()=>setPageValue('Student_pro')}>
                <View style={{ borderWidth: 1, marginTop: '5%', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Student Pro</Text>
                    <Text>free Softener upgrade</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4kg clothes ×4 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>

                    <Text style={styles.listtext}>£30.00/month</Text>

                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>setPageValue('Entry')}>
                <View style={{ borderWidth: 1, marginTop: '5%', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Entry</Text>
                    <Text>free Softener upgrade</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4kg clothes,Towels,Sheets ×2 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>

                    <Text style={styles.listtext}>£16.99.00/month</Text>

                </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>setPageValue('Regular')}>
                <View style={{ borderWidth: 1, marginTop: '5%', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Regular</Text>
                    <Text>free Softener upgrade</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4kg clothes ×3 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>

                    <Text style={styles.listtext}>£22.99.00/month</Text>

                </View>
                </TouchableHighlight>
               
                <TouchableHighlight onPress={()=>setPageValue('Large')}>
                <View style={{ borderWidth: 1, marginTop: '5%', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Large</Text>
                    <Text>free Softener upgrade</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4kg clothes ×2 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginLeft: '15%', marginRight: '15%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4 kg Towel,Sheet ×1</Text>
                        <Text style={styles.listtext}>wash,Dry,Fold</Text>
                    </View>
                    <Text style={styles.listtext}>£28.99.00/month</Text>

                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>setPageValue('Premium')}>
                <View style={{ borderWidth: 1, marginTop: '5%', marginLeft: '10%', marginRight: '10%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', }}>Premium</Text>
                    <Text>free Softener upgrade</Text>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginTop: '5%', marginLeft: '10%', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>8kg clothes ×2 </Text>
                        <Text style={styles.listtext}>wash,Dry,Fold </Text>
                    </View>
                    <View style={{ borderWidth: 1, flexDirection: 'column', marginLeft: '15%', marginRight: '15%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.listtext}>4 kg Towel,Sheet ×2</Text>
                        <Text style={styles.listtext}>wash,Dry,Fold</Text>
                    </View>
                    <Text style={styles.listtext}>£34.99.00/month</Text>

                </View>

              </TouchableHighlight >
                <Text style={styles.text}>Choose a renewel option </Text>
                <TouchableHighlight style={{ borderWidth: 1, height: 50, width: "60%", marginLeft: '25%', marginTop: '4%' }}
                
                onPress={()=>setRenew('auto_renew')}
                
                >
                    <Text style={styles.listtext}>Automatically renew every month</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ borderWidth: 1, height: 50, width: "60%", marginLeft: '25%', marginTop: '4%' }}
                onPress={()=>setRenew('no_auto_renew')}
                >
                    <Text style={styles.listtext}>Do not auto-renew</Text>
                </TouchableHighlight>
                <Text style={{
                    justifyContent: 'center',
                    fontSize: 20,
                    marginTop: '10%',
                    marginBottom: '5%'
                }}> *This is automaticaly renew on order date</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>

                    <TouchableHighlight style={{ borderWidth: 1, height: 50, width: 100, borderRadius: 4 }} >
                        <Text style={styles.listtext} >BACK</Text>

                    </TouchableHighlight>
                    <TouchableHighlight style={{ borderWidth: 1, height: 50, width: 200, alignItems: 'center', alignContent: 'center', borderRadius: 4 }} 
                    onPress={select}
                    
                    >
                        <Text style={styles.listtext} >{data}</Text>

                    </TouchableHighlight>

                </View>






                < Footer />
            </ScrollView>


        </SafeAreaView>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '5%'
    },

    listtext: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        marginTop: '5%'

    },



});