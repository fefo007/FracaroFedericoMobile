import {StyleSheet} from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secundaryColor,
        alignItems:'center',
        
    },
    card:{
        flexDirection:'column',
        width:'85%',
        height:500,
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
        padding:20,
        marginTop:'30%'
    },
    input:{
        width:300,
        height:50,
        backgroundColor:colors.secundaryColor,
        borderRadius:50,
        paddingLeft:10,
        marginBottom:20,
        
    },
    buttonContainer:{
        marginTop:20,
        marginBottom:5,
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
    },
    text:{
        color:colors.primaryColor,
        fontSize:30,

    }
})

export default styles