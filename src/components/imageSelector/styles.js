import { StyleSheet } from "react-native"
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    imgContainer:{
        width:'85%',
        height:'50%',
        marginTop:20,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    imgText:{
        fontSize:20,
    },
    img:{
        width:'100%',
        height:'100%',
    },
    imgPreview:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    buttonContainer:{
        marginTop:20,
        marginBottom:20,
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
        fontSize:25,
    }
})

export default styles