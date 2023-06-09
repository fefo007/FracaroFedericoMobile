import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    item:{
        padding:10,
        borderBottomColor:colors.quaternaryColor,
        borderBottomWidth:3,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    headerText:{
        fontSize:20,
    },
    contImage:{
        height:70,
        width:60
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:5
    },
    contName:{
        flexWrap:"wrap",
        padding:10,
        width:220,
        padding:10
    },
    contDelete:{
        margin:20,
        width:30,
    }
})

export default styles