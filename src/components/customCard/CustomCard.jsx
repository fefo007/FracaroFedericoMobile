import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButtom from '../customButton/CustomButtom'

const CustomCard = ({item,onCart,onFavorite,onSelect}) => {
return (
    <View style={styles.card}>
        <TouchableOpacity
        onPress={onSelect}
        >
            <Image  
            borderRadius={20}
            style={styles.images} 
            source={item.image}/>
        </TouchableOpacity>
        <Text>
            {item.name}
        </Text>
        <Text>
            $ {item.price}
        </Text>
        <View style={styles.buttoms}>
            <CustomButtom 
            buttomName={'Favoritos'} 
            buttonAction={onFavorite}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            />
            <CustomButtom 
            buttomName={'Carrito'} 
            buttonAction={onCart}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            />
        </View>
    </View>
)
}

export default CustomCard

