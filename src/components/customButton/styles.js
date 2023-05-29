import { StyleSheet } from "react-native";
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.secundaryColor,
        width:'150%',
        height:30,
        margin:2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius:15
    },
    imageContainer:{
        width:40,
        height:40,
    },
    image:{
        width:'100%',
        height:'100%'
    },
    textContainer:{
        width:50,
        height:50,
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        fontSize:10
    }
})

export default styles