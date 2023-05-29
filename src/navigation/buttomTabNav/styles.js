import {StyleSheet} from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.tertiaryColor,
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        position:'absolute',
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:10
    },
    buttom:{
        backgroundColor:null,
        shadowColor: null,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    }
})

export default styles