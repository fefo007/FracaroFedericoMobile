import { FlatList,View} from 'react-native'
import React from 'react'
import CustomButtom from '../../components/customButton/CustomButtom'
import styles from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { selectedCategory } from '../../store/actions/categories.action'
import { useEffect } from 'react'
import { getCart } from '../../store/actions/cart.action'


const CategoryScreen = ({navigation}) => {
  const categories = useSelector(state=>state.categories.categories)
  const user = useSelector(state=>state.auth.user)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getCart(user))
  })
  
  const handleSelected = (item)=>{
    dispatch(selectedCategory(item.name))
    navigation.navigate('Products')
  }

  const renderCategories = ({item})=>(
    <View>
      <CustomButtom
      item={item}
      imageUrl={item.image}
      buttomName={item.name}
      buttonAction={handleSelected}
      styleimageContainer={styles.imageContainer}
      styleContainer={styles.buttonContainer}
      styletextContainer={styles.textContainer}
      styleText={styles.buttomText}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.card}
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item=>item.id}
      >
      </FlatList>
    </View>
  )
}

export default CategoryScreen