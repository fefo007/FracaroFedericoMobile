import { View } from 'react-native'
import React from 'react'
import ProdDetail from '../../components/prodDetail/ProdDetail'
import styles from './styles'
import { useSelector } from 'react-redux'

const DetailScreen = ({route}) => {

  // const product = useSelector(state=>state.products.selectedProd)
  console.log(route.params)
  const product = route.params.item

  return (
    <View style={styles.container}>
        <ProdDetail 
          item={product}
        />
    </View>
  )
}

export default DetailScreen