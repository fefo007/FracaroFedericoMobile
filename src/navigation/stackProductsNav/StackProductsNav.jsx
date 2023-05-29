
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from '../../screens/stackDetailScreen/DetailScreen'
import CategoryScreen from '../../screens/stackCategoryScreen/CategoryScreen'
import ProductsScreen from '../../screens/stackProductsScreen/ProductsScreen'

const stack = createStackNavigator()

const StackProductsNav = () => {

  return (
    <stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown:false
    }}
    >
      <stack.Screen 
      name='Home'
      component={CategoryScreen}
      />
      <stack.Screen 
      name='Products'
      component={ProductsScreen}
      />
      <stack.Screen 
      name='Detail'
      component={DetailScreen}
      />
    </stack.Navigator>
  )
}

export default StackProductsNav