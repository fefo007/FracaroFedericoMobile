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
        borderRadius:15,
        marginTop:20,
        marginBottom:20,
        borderRadius:15,
        width:'100%',
        height:50
    },
    textContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:25
    }
})

export default styles