
      
       <Stack.Navigator
       screenOptions={{
         headerTitleAlign: 'center',
         headerStyle: {
           backgroundColor: '#621FF7',
         },
         headerTintColor: '#fff',
         headerTitleStyle :{
           fontWeight: 'bold',
         },
       }}
     >
     <Stack.Screen 
       name="Signup" 
       component={Signup} 
       options={{ title: 'signup' }}
     />
     <Stack.Screen 
       name="Login" 
       component={Login} 
       options={{ title: 'Blog' }}
     />
     <Stack.Screen 
       name="Forgot" 
       component={Forgot} 
       options={{ title: 'forgot' }}
     />
     
   </Stack.Navigator>///


screenOptions={{
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#621FF7',
    },
    headerTintColor: '#fff',
    headerTitleStyle :{
      fontWeight: 'bold',
    },
  }}