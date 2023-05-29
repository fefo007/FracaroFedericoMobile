import { StyleSheet } from "react-native"
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.tertiaryColor,
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    image:{
        height:30,
        width:30
    },
    text:{
        color:colors.primaryColor,
        fontSize:40
    },
})

export default styles