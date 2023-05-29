import { FlatList,View} from 'react-native'
import React from 'react'
import {categories} from '../../data/categories'
import CustomButtom from '../../components/customButton/CustomButtom'
import styles from './styles'


const CategoryScreen = ({navigation}) => {

  const selectedCategory = (item)=>{
    navigation.navigate('Products',{
      catId:item.id,
      catName:item.name
    })
  }

  const renderCategories = ({item})=>(
    <View>
      <CustomButtom
      buttomName={item.name}
      buttonAction={selectedCategory}
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