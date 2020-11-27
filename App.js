import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Signup from './screens/SignupScreen';
import Login from './screens/LoginScreen';
import Forgot from './screens/ForgotScreen';
import Orders from './screens/Orders';
import { Ionicons } from '@expo/vector-icons';
import Profile from './screens/Profile';
import NewOrder from './screens/NewOrder';
import Standalone from './screens/Standalone';
import House from './screens/House';


const Tab= createBottomTabNavigator();


function NavTab(){
  return (
  
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Orders') {
          iconName = focused ? 'ios-list' : 'ios-list';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'ios-person' : 'ios-person';
        }
        else if (route.name === 'NewOrder') {
          iconName = focused ? 'ios-add' : 'ios-add';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#96c5e0',
      inactiveTintColor: 'gray',
    }}
  >
    
    
    
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Profile} />
       <Tab.Screen name="NewOrder" component={NewOrder} /> 
      
    

    </Tab.Navigator>
    

  )


}


const MainStack= createStackNavigator()
function MainNav(){
return (
  
    <MainStack.Navigator initialRouteName='Signup'>
           <MainStack.Screen name="NavTab" component={Orders} />
        <MainStack.Screen name="Signup" component={Signup} />
        <MainStack.Screen name='Login' component={Login}/>
        <MainStack.Screen name='Orders' component={Orders}/>
        <MainStack.Screen name='Profile' component={Profile}/>
        <MainStack.Screen name='NewOrder' component={NewOrder}/>
        <MainStack.Screen name='Standalone' component={Standalone}/>
        <MainStack.Screen name='House' component={House}/>
        
  </MainStack.Navigator>

    

)
}

export default function App() {
  return (
       
      
      <NavigationContainer>
        < MainNav />
      </NavigationContainer>
      
  
  );
}