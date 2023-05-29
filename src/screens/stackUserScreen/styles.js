import {StyleSheet} from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secundaryColor
    },
    card:{
        flexDirection:'column',
        // alignItems:'center',
        width:'80%',
        height:'70%',
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
    }
})

export default styles