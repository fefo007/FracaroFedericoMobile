import { StyleSheet } from "react-native";
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    formControl:{
        width:'100%'
    },
    label:{
        marginVertical:6
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:2
    },
    errorContainer:{
        marginBottom:6,
        marginTop:8
    },
    errorText:{
        color:colors.primaryColor
    }
})

export default styles