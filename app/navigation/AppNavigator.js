import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';

import Daily from '../screens/Daily';
import Weekly from '../screens/Weekly';
import Home from '../screens/Home';


const Stack = createStackNavigator();



export default function AppNavigator() {
    let day1 =  moment()
    const [day,setDay] = useState(day1)
    let year = day.format('YYYY')

    const start = day.subtract(3,'days').format('MMM D') 
    const end = day.add(6, 'days').format('MMM D')  // total 4 days enabled
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='daily' component={Daily} options={{title:`${day1.format('ddd MMM D, YYYY')}`}} />
            <Stack.Screen name='weekly' component={Weekly} options={{ title:`${start } - ${end }, ${year} `}} />
        </Stack.Navigator>
    )
}

