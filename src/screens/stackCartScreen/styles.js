import {StyleSheet} from 'react-native'
import colors from '../../constants/colors'

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
        marginBottom:50,
    },
    footer:{
        flexDirection:'row',
        marginBottom:20,
    },
    imageButton:{
        width:0,
        height:0
    },
    buttomContainer:{
        width:'50%',
        height:40
    },
    btnText:{
        fontSize:20
    },
    textContainer:{
        width:'100%',
        paddingLeft:45,
        paddingTop:5
    },
    totalText:{
        fontSize:20,
        marginTop:10,
        marginRight:20
    },
    emtyCartImageContainer:{
        width:'100%',
        height:'90%',
        padding:20
    },
    emtyCartImage:{
        width:'100%',
        height:'80%',
    }
})

export default styles