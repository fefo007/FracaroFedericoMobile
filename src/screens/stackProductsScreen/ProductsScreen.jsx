import { Text, View } from 'react-native'
import React from 'react'
import ProductList from '../../components/productsList/ProductsList'
import styles from './styles'

const ProductsScreen = ({route}) => {
return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text>
                {route.params.name}
            </Text>
        </View>
        <View style={styles.card}>
            <ProductList />
        </View>
    </View>
)
}

export default ProductsScreen