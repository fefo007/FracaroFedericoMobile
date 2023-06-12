import { View, Text,Image,Alert } from 'react-native'
import React,{useState} from 'react'
import CustomButon from '../customButton/CustomButtom'
import * as ImagePicker from 'expo-image-picker'
import styles from './styles'

const ImageSelector = (props) => {

    const [pickedUrl, setpickedUrl] = useState();

    const verifyPermissons = async ()=>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if(status!=='granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Se requieren los permisos necesarios',
                [{text:'Ok'}]
                )
            return false
        }
        return true
    }
    const handleTakeImage = async()=>{
        const hasPermissons = await verifyPermissons()
        if(!hasPermissons)return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[19,20],
            quality:0.7
        })
        setpickedUrl(image.assets[0].uri)
        props.onImage(image.assets[0].uri)
    }

return (
    <View style={styles.imgContainer}>
        <View style={styles.imgPreview}>
            {!pickedUrl?
            (<Text style={styles.imgText}>
                No hay Imagen seleccionada
            </Text>):(
                <Image
                source={{uri:pickedUrl}}
                style={styles.img}
                />
            )
        }
        </View>
        <View>
            <CustomButon
            buttomName={'Tomar foto'}
            buttonAction={handleTakeImage}
            styleimageContainer={styles.imageContainer}
            styleContainer={styles.buttonContainer}
            styletextContainer={styles.textContainer}
            styleText={styles.buttomText}
            />
        </View>
    </View>
    )
}

export default ImageSelector