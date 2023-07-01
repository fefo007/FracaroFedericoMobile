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
        marginBottom:50
    },
    emtyFavImageContainer:{
        width:'100%',
        height:'90%',
        padding:20
    },
    emtyFavImage:{
        width:'100%',
        height:'80%',
    },
    favTextContainer:{
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'center'
    },
    favText:{
        fontSize:30
    }
})

export default styles