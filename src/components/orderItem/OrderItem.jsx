import { View, Text, } from 'react-native'
import React from 'react'
import styles from './styles'


const formatDate = (date)=>{
    const orderDate = new Date(date)
    return orderDate.toLocaleDateString()
}


const OrderItem = ({item}) => {
  return (
      <View style={styles.item}>
        <Text style={styles.texts}>
          compra realizada: {formatDate(item.date)}
        </Text>
        <Text style={styles.texts}>
          cantidad de productos: {item.items.length}
        </Text>
        <Text style={styles.texts}>
          total: ${item.total}
        </Text>
      </View>
  )
}

export default OrderItem