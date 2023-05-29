import { View, Text, Button,TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const LogIn = ({onLogIn}) => {

    const [inputName,setInputName]= useState('')
    const [inputPass,setInputPass]= useState('')
    const [registerUsers,setRegisterUsers]= useState({})

    const onChangeInputName = (text)=>{
        setInputName(text)
    }
    const onChangeInputPass = (text)=>{
        setInputPass(text)
    }
    const addUser = ()=>{
        if(!inputName.trim() || !inputPass.trim()){
            return  console.log({error:'completar los campos '})
        }
        setRegisterUsers({name:inputName,password:inputPass,id:Math.random().toString()})
        setInputName('')
        setInputPass('')
        }

return (
    <View style={styles.logContainer}>
        <Text style={styles.text}>
            Inicie sesion
        </Text>
        <TextInput 
        style={styles.input} 
        placeholder='usuario' 
        onChangeText={onChangeInputName}
        value={inputName}/>
        <TextInput 
        style={styles.input} 
        placeholder='password' 
        onChangeText={onChangeInputPass}
        value={inputPass}/>
        <Button
        title='registrar'
        onPress={addUser}
        />
        <Button 
        title='ingresar' 
        onPress={()=>{onLogIn(registerUsers)}}/>
    </View>
    )
}

export default LogIn