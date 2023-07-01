import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButtom from '../customButton/CustomButtom'
import heart from '../../assets/icons/heart.png'
import emtyHeart from '../../assets/icons/emtyHeart.png'
import cart from '../../assets/icons/cart.png'


const CustomCard = ({item,onCart,onFavorite,onSelect}) => {

return (
    <View style={styles.card}>
        <TouchableOpacity
        onPress={()=>onSelect(item)}
        >
            <Image  
            borderRadius={20}
            style={styles.images} 
            src={item.image}

            />
        </TouchableOpacity>
        <Text>
            {item.name}
        </Text>
        <Text>
            $ {item.price}
        </Text>
        <View style={styles.buttoms}>
            <CustomButtom 
            buttonAction={()=>onFavorite(item)}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            imageUrl={emtyHeart}
            imageUrlChange={heart}
            />
            <CustomButtom 
            buttonAction={()=>onCart(item)}
            styleimageContainer={styles.imageButton}
            styleContainer={styles.buttomContainer}
            imageUrl={cart}
            />
        </View>
    </View>
)
}

export default CustomCard

