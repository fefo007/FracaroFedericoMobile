import { View,FlatList} from 'react-native'
import React from 'react'
import CustomCard from '../customCard/CustomCard'
import styles from './styles'
import {products} from '../../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductsList = () => {
    const navigation=useNavigation()
    const handleSelected = (item)=>{
        navigation.navigate('Detail',{
            prod:item,
            name:item.name
        })
    }
    const renderProducts=({item})=>(
        <View>
            <CustomCard 
            item={item} 
            onSelect={handleSelected}
            // onCart={handleOnCart} 
            // onFavorite={handleOnFavorite}
            />
        </View>
    )

return (
    <View>
        <FlatList 
        contentContainerStyle={styles.scroll}
        data={products}
        renderItem={renderProducts}
        keyExtractor={item=>item.id}
        numColumns={2}
        bouncesZoom={true}
        >
        </FlatList>
    </View>
)
}

export default ProductsList