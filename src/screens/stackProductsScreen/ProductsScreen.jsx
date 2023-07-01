
import { View,FlatList,Text} from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../../components/customCard/CustomCard'
import styles from './styles'
import { useSelector,useDispatch } from 'react-redux'
import { filteredProducts,selectedProduct } from '../../store/actions/products.action'
import { addItem } from '../../store/actions/cart.action'
import { addFavItem,removeFavItem } from '../../store/actions/favorite.action'
import  Toast  from 'react-native-toast-message'

const ProductsScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const categorySelected = useSelector(state=>state.categories.selected)
    const filterProds = useSelector(state=>state.products.filteredProds) 
    const favItems = useSelector(state=>state.favorite.items)

    useEffect(()=>{
        dispatch(filteredProducts(categorySelected.name))
    },[])

    const showToast = (item)=>{
        Toast.show({
            position:'top',
            text1:'Producto agregado al carrito',
            text2:`${item.name}`,
            visibilityTime:1500,
            autoHide:true,
            topOffset:20,
        })
    }
    const handleOnCart = (item)=>{
        showToast(item)
        dispatch(addItem(item))
    }

    const handleOnFavorite = (item)=>{
        const indexItem = favItems.findIndex(
            favItem=>favItem.id === item.id
        )
        if (indexItem === -1){
            dispatch(addFavItem(item))
        }else{
            dispatch(removeFavItem(item.id))
        }
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
            onFavorite={handleOnFavorite}
            />
        </View>
    )


return (
    <View style={styles.container}>
        
        <View style={styles.card}>
            <View >
                <Text style={styles.text}>
                    {categorySelected.name}
                </Text>
            </View>
            <FlatList 
            contentContainerStyle={styles.scroll}
            data={filterProds}
            renderItem={renderProducts}
            keyExtractor={item=>item.id}
            numColumns={2}
            bouncesZoom={true}
            showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
        <Toast />
    </View>
)
}

export default ProductsScreen