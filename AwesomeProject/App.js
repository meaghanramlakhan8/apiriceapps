import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


import { Button } from 'react-native'

const App = () => {
	//"Endpoint" URL where the data is located
	const URL = "https://placekitten.com/"

  
	return (
		<Button
			onPress={() => Alert.alert('Simple Button pressed')}
		   title = "Red button!"
		   color = "blue"
       display = 'flex'
      justifyContent= 'center'
	  height = '30%'
       
	   		
		   
		/>
	 )
	
	// Set up the state to store the fetched data
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			console.log("Making GET Request");
			try {
				// GET Request
				const response = await axios.get(URL)
						 .then((response) => {
						console.log(response)
				}).catch(() => {
				}
				// Update the state with the fetched data
				,(response.data), 	
  )}catch (error) {
				// Handle any errors
        console.error('Failed to fetch data: ', error);
			}
      

		fetchData()
	}

  return (
    <View style={styles.container}>
      <Text>Hrel</Text>
      <StatusBar style="auto" />
    </View>
  );

}

)}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


