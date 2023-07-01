import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#A4BC92',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
        width:'80%',
        height:'50%',
    },
    modalInnerContainer:{
        flex:1,
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        width:'100%',
        height:'80%',
        padding:10
    },
    text:{
        fontSize:25
    }
})

export default styles