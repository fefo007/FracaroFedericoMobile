import { View, Text,Image,Button } from 'react-native'
import React from 'react'
import styles from './styles'

const ProdDetail = ({image,name,descript,price}) => {
  return (
    <View style={styles.detail}>
        <Image   
        source={image}/>
        <Text>
            {name}
        </Text>
        <Text>
            {descript}
        </Text>
        <Text>
          ${price}
        </Text>
        <View>
            <Button
            title='Comprar'/>
            <Button
            title='+Carrito'/>
        </View>
    </View>
  )
}

export default ProdDetail