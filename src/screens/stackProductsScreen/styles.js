import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secundaryColor,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        flexDirection:'column',
        alignItems:'center',
        width:'95%',
        height:'90%',
        backgroundColor:colors.tertiaryColor,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginBottom:50
    },
    scroll:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:5
    }
})

export default styles