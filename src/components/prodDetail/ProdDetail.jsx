import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ProdDetail = ({item,onCart,onBuy}) => {
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
        <CustomButtom 
            buttomName={'Comprar'} 
            buttonAction={()=>console.log('compra efectuada')}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            />
            <CustomButtom 
            buttomName={'Carrito'} 
            buttonAction={()=>onCart(item.id)}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            />
        </View>
      </View>
    </View>
  )
}

export default ProdDetail