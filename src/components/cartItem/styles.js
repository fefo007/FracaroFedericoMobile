import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:5,
        borderBottomColor:colors.quaternaryColor,
        borderBottomWidth:3
    },
    headerText:{
        fontSize:20
    },
    info:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default styles