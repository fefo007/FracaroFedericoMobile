import { Image, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomButtom = ({
    buttonAction,
    imageUrl,
    buttomName,
    styleContainer,
    styleimageContainer,
    styletextContainer,
    styleText
}) => {

return (
    <TouchableOpacity 
    onPress={buttonAction}
    style={{...styles.container,...styleContainer}}
    >
        <View style={{...styles.imageContainer,...styleimageContainer}}>
            <Image 
            source={imageUrl} 
            style={styles.image}
                />
        </View>
        <View style={{...styles.textContainer,...styletextContainer}}>
            <Text style={{...styles.text,...styleText}}>
                {buttomName}
            </Text>
        </View>    
    </TouchableOpacity>
)
}

export default CustomButtom