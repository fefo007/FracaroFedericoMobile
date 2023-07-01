import { View, Text } from 'react-native'
import React, {useState}from 'react'
import styles from './styles'
import ImageSelector from '../../components/imageSelector/ImageSelector'
import { useSelector } from 'react-redux'


const UserScreen = () => {

  const [image,setImage] = useState('')
  const user = useSelector(state=>state.auth.user)
console.log(image)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageSelector
        onImage={setImage}
        />
      <View>
        <Text style={styles.userText}>
          {`      Nombre de usuario: 
          
          ${user}`}
        </Text>
      </View>
      </View>
    </View>
  )
}

export default UserScreen