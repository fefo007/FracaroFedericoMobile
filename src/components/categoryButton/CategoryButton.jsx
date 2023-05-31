import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CategoryButton = ({item,onSelect}) => {
return (
        <TouchableOpacity
        style={styles.container}
        onPress={onSelect(item)}
        >
            <View style={styles.textContainer}>
                <Text styele={styles.text}>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
)
}

export default CategoryButton