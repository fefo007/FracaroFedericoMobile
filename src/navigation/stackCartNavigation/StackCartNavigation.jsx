
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../../screens/stackCartScreen/CartScreen'

const stack = createStackNavigator()

const StackCartNavigation = () => {
    return(
        <stack.Navigator 
        screenOptions={{
            headerShown:false
        }}
        >
            <stack.Screen name='Cart' component={CartScreen}/>
        </stack.Navigator>
    )
}

export default StackCartNavigation