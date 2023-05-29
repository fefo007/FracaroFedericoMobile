import { View, FlatList,Text } from 'react-native'
import styles from './styles'
import OrderItem from '../../components/orderItem/OrderItem'
import orders from '../../data/orders'


const BuysScreen = () => {

  const renderOrderItem =({item})=>(
    <OrderItem item={item}/>
  )

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>
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