import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card:{
        alignItems:'center',
        backgroundColor:'#B3C99C',
        width:170,
        height:350,
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius:10
        },
    images:{
        marginTop:10,
        width:150,
        height:250,
    },
    buttoms:{
        flexDirection:'row'
    },
    buttomContainer:{
        width:'45%',
        backgroundColor:'transparent',
        shadowColor:'transparent'
    }
})

export default styles