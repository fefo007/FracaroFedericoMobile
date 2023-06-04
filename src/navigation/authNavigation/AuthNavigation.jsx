import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/authScreen/AuthScreen'

const stack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <stack.Navigator
    screenOptions={{
        headerShown:false,
        
    }}
    >
        <stack.Screen
        name='logIn'
        component={AuthScreen}
        />
    </stack.Navigator>
  )
}

export default AuthNavigation