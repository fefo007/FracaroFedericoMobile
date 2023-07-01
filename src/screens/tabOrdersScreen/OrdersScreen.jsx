import { View, FlatList,Text } from 'react-native'
import styles from './styles'
import OrderItem from '../../components/orderItem/OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrders } from '../../store/actions/orders.action'


const BuysScreen = () => {

  const dispatch = useDispatch()
  const orders = useSelector(state=>state.orders.list)

  useEffect(()=>{
    dispatch(getOrders())
  },[orders])

  const renderOrderItem =({item})=>(
    <OrderItem item={item}/>
  )


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>
          Compras realizadas
        </Text>
        <FlatList
        data={orders}
        keyExtractor={item=>item.id}
        renderItem={renderOrderItem}
        />      
      </View>
    </View>
  )
}

export default BuysScreen