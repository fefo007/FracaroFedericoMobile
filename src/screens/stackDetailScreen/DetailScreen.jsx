import { View } from 'react-native'
import React from 'react'
import ProdDetail from '../../components/prodDetail/ProdDetail'
import styles from './styles'

const DetailScreen = ({route}) => {
  const product = route.params.prod
  return (
    <View style={styles.container}>
        <ProdDetail 
        name={product.name}
        image={product.image}
        descript={product.description}
        price={product.price}
        />
    </View>
  )
}

export default DetailScreen