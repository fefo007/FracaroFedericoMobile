import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const formatDate = (date)=>{
    const orderDate = new Date(date)
    return orderDate.toLocaleDateString()
}

const OrderItem = ({item}) => {
  return (
    <View>
      <View>
        <Text>
          {item.date}
        </Text>
        <ScrollView>
          {item.products}
        </ScrollView>
        <Text>
          {item.total}
        </Text>
      </View>
    </View>
  )
}

export default OrderItem