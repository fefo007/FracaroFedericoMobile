import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create({
    item:{
        padding:10,
        borderBottomColor:colors.quaternaryColor,
        borderBottomWidth:3,
        flexDirection:"column",
    },
    texts:{
        fontSize:20
    }
})

export default styles