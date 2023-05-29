import { View, Text} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartItem from '../cartItem/CartItem'
import cart from '../../data/cart'
import CustomButtom from '../customButton/CustomButtom'
import styles from './styles'

const CustomCart = () => {

  const renderCartItem = ({item})=>(
    <CartItem item={item} onDelete={handleDeleteItem}/>
  )
  const handleDeleteItem = (itemId)=>{
    console.log('item borrado')
  }
  const emptyCart = ()=>{
    console.log('carrito vaciado')
  }

  const buyCart = ()=>{
    console.log('compra realizada')
  }

  return (
    <View style={styles.container}>
      <Text>
        carrito
      </Text>
      <View style={styles.list}>
        <FlatList
        data={cart}
        keyExtractor={item=>item.id}
        renderItem={renderCartItem}
        >
        </FlatList>
      </View>
      <View style={styles.footer}>
        <Text>
            total:
        </Text>
        <CustomButtom 
        buttomName={'Comprar'}
        buttonAction={()=>{emptyCart}}
        />
        <CustomButtom 
        buttomName={'Vaciar'}
        buttonAction={()=>{buyCart}}
        />
      </View>
    </View>

      
  )
}

export default CustomCart