import { View, Text } from 'react-native'
import React from 'react'
import LogIn from '../../components/logIn/LogIn'

const AuthScreen = () => {

    const onLog=()=>{
        console.log('logeado')
    }

return (
    <View>
        <LogIn 
        onLogIn={onLog}
        />
    </View>
)
}

export default AuthScreen