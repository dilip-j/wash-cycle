// screens/Blog.js

import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import axios from '../Axios';

function Blog(props) {
	const { navigation } = props;
	const user = {
      name: 'Blog'
    };

    axios.post('users', {})
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	    <Text>Blog screen</Text>
	    <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
	  </View>
	);
	
}

export default Blog;