import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    logContainer:{
        backgroundColor:colors.quaternaryColor,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    input:{
        width:300,
        height:50,
        backgroundColor:colors.secundaryColor,
        borderRadius:50,
        paddingLeft:10,
    },
    text:{
        color:colors.primaryColor,
        fontSize:20
    }
})

export default styles