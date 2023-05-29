import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';
import styles from './styles';

const CartItem = ({item,onDelete}) => {
return (
    <View style={styles.item}>
        <View>
            <Image source={item.image}/>
        </View>
        <View>
            <Text style={styles.headerText}>
                {item.name}
            </Text>
        </View>
        <View style={styles.info}>
            <View>
                <Text>
                    unidades:{item.quantity}
                </Text>
            </View>
            <View>
                <Text>
                    precio: ${item.price * item.quantity}
                </Text>
            </View>
            <TouchableOpacity onPress={()=>{onDelete}}>
                <Fontisto name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    </View>     
)
}

export default CartItem