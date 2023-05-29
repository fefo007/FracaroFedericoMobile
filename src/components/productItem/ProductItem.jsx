import { View, Text } from 'react-native'
import React from 'react'

const ProductItem = ({item,onCart,onBuy}) => {
  return (
    <View style={styles.card}>
      <Image  
      style={styles.images} 
      source={item.image}/>
      <Text>
          {item.name}
      </Text>
      <Text>
          {item.description}
      </Text>
      <Text>
          {item.price}
      </Text>
      <Text>
        cantidades a seleccionar
      </Text>
      <View>
          <CustomButtom 
          buttomName={'Comprar'} 
          buttonAction={onBuy}/>
          <CustomButtom 
          buttomName={'+Carrito'} 
          buttonAction={onCart}/>
      </View>
  </View>
  )
}

export default ProductItem