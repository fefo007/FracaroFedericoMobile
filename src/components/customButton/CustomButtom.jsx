import { Image, Text, View,TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import styles from './styles'


const CustomButtom = ({
    item,
    buttonAction,
    imageUrl,
    imageUrlChange,
    buttomName,
    styleContainer,
    styleimageContainer,
    styletextContainer,
    styleText
}) => {

    const [btnImg,setBtnImg] = useState(imageUrl)

    const buttomImage = ()=>{
        if(imageUrlChange && imageUrl){
            setBtnImg(imageUrlChange)
        }
        if(btnImg===imageUrlChange){
            setBtnImg(imageUrl)
        }
    }

return (
    <TouchableOpacity 
    onPress={()=>{
        buttonAction(item)
        buttomImage()
    }}
    style={{...styles.container,...styleContainer}}
    >
        <View style={{...styles.imageContainer,...styleimageContainer}}>
            <Image 
            source={btnImg} 
            style={styles.image}
                />
        </View>
        <View style={{...styles.textContainer,...styletextContainer}}>
            <Text style={{...styles.text,...styleText}}>
                {buttomName}
            </Text>
        </View>    
    </TouchableOpacity>
)
}

export default CustomButtom