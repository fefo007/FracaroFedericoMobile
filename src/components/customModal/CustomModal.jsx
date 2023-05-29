import { View ,Modal,Button} from 'react-native'
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
          <View style={styles.modal}>
            <Button
            title='X'
            onPress={closeIt}
            />
            {content}
          </View>
        </View>
      </Modal>
  )
}

export default CustomModal

