import { View, Text,Image,Button } from 'react-native'
import React from 'react'
import styles from './styles'

const ProdDetail = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        style={styles.image}   
        source={item.image}
        />
        <Text>
            {item.name}
        </Text>
        <Text>
            {item.descript}
        </Text>
        <Text>
          ${item.price}
        </Text>
        <View style={styles.buttoms}>
            <Button
            title='Comprar'/>
            <Button
            title='+Carrito'/>
        </View>
      </View>
    </View>
  )
}

export default ProdDetail