import { View, Text,FlatList } from 'react-native'
import styles from './styles'
import {cart} from '../../data/cart'
import CartItem from '../../components/cartItem/CartItem'



const CartScreen = () => {

  const renderCart = ({item})=>(
    <View>
      <CartItem 
      item={item}
      />
    </View>

  )

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>CartScreen</Text>
        {/* <FlatList
        data={cart}
        keyExtractor={item=>item.id}
        renderItem={renderCart}
        >
        </FlatList> */}
      </View>
    </View>
    )
}

export default CartScreen