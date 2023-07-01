import { View, Text,Image } from 'react-native'
import CustomButtom from '../customButton/CustomButtom'
import React from 'react'
import styles from './styles'

const ProdDetail = ({item,onCart,onBuy}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        style={styles.image}   
        src={item.image}
        />
        <View style={styles.textsCont}>
          <Text style={styles.text}>
              {item.name}
          </Text>
          <Text style={styles.text}>
              {item.description}
          </Text>
          <Text style={styles.text}>
            ${item.price}
          </Text>
        </View>
        <View style={styles.buttoms}>
        <CustomButtom 
            buttomName={'Comprar'} 
            buttonAction={()=>onBuy()}
            styleimageContainer={styles.imageContainer}
            styleContainer={styles.buttonContainer}
            styletextContainer={styles.textContainer}
            styleText={styles.buttomText}
            />
            <CustomButtom 
            buttomName={'Carrito'} 
            buttonAction={()=>onCart(item.id)}
            styleimageContainer={styles.imageContainer}
            styleContainer={styles.buttonContainer}
            styletextContainer={styles.textContainer}
            styleText={styles.buttomText}
            />
        </View>
      </View>
    </View>
  )
}

export default ProdDetail