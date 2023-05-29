import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#A4BC92',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
        width:'50%',
        height:'100%',
    },
    modalInnerContainer:{
        flex:1,
        marginTop:60,
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        justifyContent:'center',
        alignItems:'flex-start',
    }
})

export default styles