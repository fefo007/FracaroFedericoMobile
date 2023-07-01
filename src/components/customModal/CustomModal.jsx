import { View ,Modal,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import styles from './styles'


const CustomModal = ({isVisible,closeIt,content}) => {
  return (
      <Modal 
      visible={isVisible} 
      animationType='slide' 
      transparent={true}
      >
        <View style={styles.modalInnerContainer}>
        <TouchableOpacity style={styles.modal} onPress={closeIt}>
          <View style={styles.content}>
            <Text style={styles.text}>
              {content}
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      </Modal>
  )
}

export default CustomModal

