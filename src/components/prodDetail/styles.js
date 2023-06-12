import { StyleSheet } from "react-native"
import colors from '../../constants/colors';

const styles = StyleSheet.create({
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
        width:'85%',
        height:'80%',
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
    image:{
        width:'80%',
        height:'50%',
        borderRadius:10,
        marginTop:20
    },
    textsCont:{
        flexDirection:'column',
        marginTop:25,
        marginBottom:25,
        alignItems:'center'
    },
    text:{
        fontSize:20,
    },
    buttoms:{
        flexDirection:'column',
        width:150
    },
    buttonContainer:{
        marginTop:10,
        marginBottom:2,
        borderRadius:15,
        width:'100%',
        height:50
    },
    imageContainer:{
        width:0,
        height:0
    },
    textContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    buttomText:{
        fontSize:25
    }
})

export default styles