
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from '../../screens/stackUserScreen/UserScreen'

const stack = createStackNavigator()

const StackUserNav = () => {
  return (
    <stack.Navigator
    initialRouteName='User'
    screenOptions={{
      headerShown:false
    }}
    >
      <stack.Screen name='User' component={UserScreen}/>
    </stack.Navigator>
  )
}

export default StackUserNav