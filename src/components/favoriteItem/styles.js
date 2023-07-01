import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    item:{
        padding:10,
        borderBottomColor:colors.quaternaryColor,
        borderBottomWidth:3,
        flexDirection:"row",
    },
    headerText:{
        fontSize:20
    },
    // contInfo:{
    //     flexDirection:"column",
    //     flexWrap:'wrap',
    //     alignItems:'center',
    //     justifyContent:'space-between'
    // },
    contImage:{
        height:70,
        width:60
    },
    image:{
        width:'100%',
        height:'100%'
    },
    contName:{
        flexWrap:"wrap",
        padding:10
    },
})

export default styles