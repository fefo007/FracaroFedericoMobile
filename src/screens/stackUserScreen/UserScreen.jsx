import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ImageSelector from '../../components/imageSelector/ImageSelector'
import { useState } from 'react'

const UserScreen = () => {

  const [image,setImage] = useState()
  console.log(image)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageSelector
        onImage={setImage}
        />
      </View>
    </View>
  )
}

export default UserScreen