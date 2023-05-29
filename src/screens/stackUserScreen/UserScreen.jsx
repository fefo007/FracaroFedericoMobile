import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>
          UserScreen
        </Text>
      </View>
    </View>
  )
}

export default UserScreen