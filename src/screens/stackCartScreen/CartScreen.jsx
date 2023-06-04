import { View, Text,FlatList } from 'react-native'
import styles from './styles'
// import {cart} from '../../data/cart'
import CartItem from '../../components/cartItem/CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../../store/actions/cart.action'
import CustomButtom from '../../components/customButton/CustomButtom'


const CartScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(state=>state.cart.items)
  const total = useSelector(state=>state.cart.total)

  // const productInCart = cart[0].products
  const handleDeleteItem = (itemId)=>{
    dispatch(removeItem(itemId))
  }

  const handleConfirmCart = ()=>{
    dispatch(confirmCart)
  }

  const renderCart = ({item})=>(
    <View>
      <CartItem 
      item={item}
      onDelete={handleDeleteItem}
      />
    </View>

  )

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>CartScreen</Text>
        <FlatList
        data={items}
        keyExtractor={item=>item.id}
        renderItem={renderCart}
        >
        </FlatList>
      </View>
      <View style={styles.footer}>
        <Text>
          Total: ${total}
        </Text>
        <CustomButtom
        buttomName={'Confirmar'}
        buttonAction={handleConfirmCart}
        styleimageContainer={styles.imageButton}
        styleContainer={styles.buttomContainer}
        />
      </View>
    </View>
    )
}

export default CartScreen