import { View, Text,FlatList,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from './styles'
import CartItem from '../../components/cartItem/CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { confirmCart, postCart, putCart, removeItem } from '../../store/actions/cart.action'
import CustomButtom from '../../components/customButton/CustomButtom'
import emtyCart from '../../assets/products/carritoVacio.webp'
import CustomModal from '../../components/customModal/CustomModal'


const CartScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(state=>state.cart.items)
  const total = useSelector(state=>state.cart.total)
  const user = useSelector(state=>state.auth.user)
  const quantity = useSelector(state=>state.cart.quantity)
  const cartId = useSelector(state=>state.cart.cartId)
  const [modalOn,setModalOn] = useState(false)
  
  useEffect(()=>{
    if(items !== []){
      dispatch(putCart(cartId,items,total,user,quantity))
    }
    // else{
    //   dispatch(postCart(items,total,user,quantity))
    // }
  },[items])

  const showModal = ()=>{
    setModalOn(true)
}
  const closeModal = ()=>{
    setModalOn(false)
  }
  const handleDeleteItem = (itemId)=>{
    dispatch(removeItem(itemId))
  }

  const handleConfirmCart = ()=>{
    showModal()
    dispatch(confirmCart(items,total))
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
        {!items.length?
        <View style={styles.emtyCartImageContainer}>
          <Image
          style={styles.emtyCartImage}
          source={emtyCart}
          />
        </View>
        :
        <FlatList
        data={items}
        keyExtractor={item=>item.id}
        renderItem={renderCart}
        >
        </FlatList>
      } 
        <View style={styles.footer}>
          <Text style={styles.totalText}>
            Total: ${total}
          </Text>
          <CustomButtom
          buttomName={'Confirmar'}
          buttonAction={handleConfirmCart}
          styleimageContainer={styles.imageButton}
          styleContainer={styles.buttomContainer}
          styleText={styles.btnText}
          styletextContainer={styles.textContainer}
          />
        </View>
      </View>
      <CustomModal
        isVisible={modalOn}
        content={'Compra realizada con exito'}
        closeIt={closeModal}
        />
    </View>
    )
}

export default CartScreen