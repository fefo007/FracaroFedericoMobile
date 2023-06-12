
import { View,FlatList,Text} from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../../components/customCard/CustomCard'
import styles from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { filteredProducts,selectedProduct } from '../../store/actions/products.action'
import { addItem } from '../../store/actions/cart.action'


const ProductsScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const categorySelected = useSelector(state=>state.categories.selected)
    const filterProds = useSelector(state=>state.products.filteredProds) 

    useEffect(()=>{
        dispatch(filteredProducts(categorySelected.name))
    },[])

    const handleOnCart = (item)=>{
        dispatch(addItem(item))
    }

    const handleSelected = (item)=>{
        dispatch(selectedProduct(item.id))
        navigation.navigate('Detail')
    }
    const renderProducts=({item})=>(
        <View>
            <CustomCard 
            item={item} 
            onSelect={handleSelected}
            onCart={handleOnCart} 
            // onFavorite={handleOnFavorite}
            />
        </View>
    )


return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text>
                {categorySelected.name}
            </Text>
        </View>
        <View style={styles.card}>
            <FlatList 
            contentContainerStyle={styles.scroll}
            data={filterProds}
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