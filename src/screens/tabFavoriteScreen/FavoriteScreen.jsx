import { View, FlatList,Image,Text } from 'react-native'
import styles from './styles'
import FavoriteItem from '../../components/favoriteItem/FavoriteItem'
import { useSelector } from 'react-redux'
import emtyFav from '../../assets/products/corazonTriste.webp'

const FavoriteScreen = () => {

  const items = useSelector(state=>state.favorite.items)

  const renderFav = ({item})=>(
    <View>
      <FavoriteItem
      item={item}
      />
    </View>
  )
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      {!items.length?
        <View style={styles.emtyFavImageContainer}>
          <Image
          style={styles.emtyFavImage}
          source={emtyFav}
          />
          <View style={styles.favTextContainer}>
            <Text
            style={styles.favText}>
              Agrega productos a tus favoritos
            </Text>
          </View>
        </View>
        :
          <FlatList
          data={items}
          keyExtractor={item=>item.id}
          renderItem={renderFav}
          >
        </FlatList>
      }
      </View>
    </View>
  )
}

export default FavoriteScreen