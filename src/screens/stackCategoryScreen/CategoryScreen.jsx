import { FlatList,View} from 'react-native'
import React from 'react'
import CustomButtom from '../../components/customButton/CustomButtom'
import styles from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { selectedCategory } from '../../store/actions/categories.action'
// import {categories} from '../../data/categories'


const CategoryScreen = ({navigation}) => {

  const categories = useSelector(state=>state.categories.categories)
  const dispatch = useDispatch()
  
  const handleSelected = (item)=>{
    dispatch(selectedCategory(item.id))
    navigation.navigate('Products',{
      name:item.name
    })
  }

  const renderCategories = ({item})=>(
    <View>
      <CustomButtom
      item={item}
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