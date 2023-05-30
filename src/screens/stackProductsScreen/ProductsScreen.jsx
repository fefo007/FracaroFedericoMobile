
import { View,FlatList,Text} from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../../components/customCard/CustomCard'
import styles from './styles'
// import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux'
import { filteredProducts,selectedProduct } from '../../store/actions/products.action'
import {products} from '../../data/products'

const ProductsScreen = ({route,navigation}) => {
console.log(route.params)

    const filterProd=products.filter(
        prod=>prod.category===route.params.catName
    )
    
    const categorySelected = route.params.catName

        // const categorySelected = useSelector(state=>state.categories.selected)
    // const filtredProds = useSelector(state=>state.products.filteredProds) 
    // const dispatch = useDispatch()
    // const navigation=useNavigation()

    // useEffect(()=>{
    //     dispatch(filteredProducts(categorySelected.id))
    // },[])

    const handleSelected = (item)=>{
        // dispatch(selectedProduct(item.id))
        navigation.navigate('Detail',{
            item:item,
            name:item.name
        })
    }
    const renderProducts=({item})=>(
        <View>
            <CustomCard 
            item={item} 
            onSelect={handleSelected}
            // onCart={handleOnCart} 
            // onFavorite={handleOnFavorite}
            />
        </View>
    )


return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text>
                {categorySelected}
            </Text>
        </View>
        <View style={styles.card}>
            <FlatList 
            contentContainerStyle={styles.scroll}
            data={products}
            renderItem={renderProducts}
            keyExtractor={item=>item.id}
            numColumns={2}
            bouncesZoom={true}
            >
            </FlatList>
        </View>
    </View>
)
}

export default ProductsScreen