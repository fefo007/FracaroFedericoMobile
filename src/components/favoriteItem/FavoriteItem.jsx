import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FavoriteItem = ({item}) => {
  const navigation = useNavigation()
  
  const handleSelected = (item)=>{
    dispatch(selectedProduct(item.id))
    navigation.navigate('Detail')
}

  return (
    <TouchableOpacity
    onPress={()=>{handleSelected}}
    >
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
                 ${item.price * item.quantity}
            </Text>
        </View>
    </View> 
    </TouchableOpacity> 
  )
}

export default FavoriteItem