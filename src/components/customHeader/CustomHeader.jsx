import { Text, View,Image } from 'react-native'
import React from 'react'
import styles from './styles'



const CustomHeader = ({newStyles}) => {

    return (
        <View style={styles.header}>
            <Text style={{...styles.text,...newStyles}}>
                Bienvenido
            </Text>
            <Image
            style={styles.image}
            source={require('../../assets/carrito.webp')}/>
        </View>
    )
}

export default CustomHeader

