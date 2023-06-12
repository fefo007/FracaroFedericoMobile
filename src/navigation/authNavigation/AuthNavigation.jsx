
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/authScreen/AuthScreen'

const stack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <stack.Navigator
    initialRouteName='logIn'
    screenOptions={{
        headerShown:false,
    }}
    >
        <stack.Screen
        name='logIn'
        component={AuthScreen}
        />
        {/* <stack.Screen
        name='register'
        compnent={RegisterScreen}
        /> */}
    </stack.Navigator>
  )
}

export default AuthNavigation