import { View } from 'react-native'
import React from 'react'
import ProdDetail from '../../components/prodDetail/ProdDetail'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/actions/cart.action'
import { Alert } from 'react-native'

const DetailScreen = () => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.products.selectedProd)

  const handleOnCart = ()=>{
    dispatch(addItem(product))
  }
  const handleBuy = ()=>{
    Alert.alert('Compra efectuada con exito,Gracias','gracias'[{text:'ok'}])
  }
  return (
    <View style={styles.container}>
        <ProdDetail 
          item={product}
          onCart={handleOnCart}
          onBuy={handleBuy}
        />
    </View>
  )
}

export default DetailScreen