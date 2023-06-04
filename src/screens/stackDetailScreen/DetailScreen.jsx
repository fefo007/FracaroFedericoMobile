import { View } from 'react-native'
import React from 'react'
import ProdDetail from '../../components/prodDetail/ProdDetail'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/actions/cart.action'

const DetailScreen = () => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.products.selectedProd)
  // const product = route.params.item
  const handleOnCart = ()=>{
    dispatch(addItem(product))
  }
  return (
    <View style={styles.container}>
        <ProdDetail 
          item={product}
          onCart={handleOnCart}
        />
    </View>
  )
}

export default DetailScreen