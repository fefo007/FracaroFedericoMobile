import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';
import styles from './styles';

const CartItem = ({item,onDelete}) => {
    
return (
    <View style={styles.item}>
        <View style={styles.contImage}>
            <Image
            style={styles.image}
            src={item.image}
            />
        </View>
        <View style={styles.contName}>
            <Text style={styles.headerText}>
                {item.name}
            </Text>
            <Text>
                unidades:{item.quantity} ${item.price * item.quantity}
            </Text>
        </View>
        <View>
            <TouchableOpacity
            style={styles.contDelete}
            onPress={()=>{onDelete(item.id)}}
            >
                <Fontisto name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    </View>     
)
}

export default CartItem