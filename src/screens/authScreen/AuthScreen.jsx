import { View, Text, KeyboardAvoidingView,TextInput, Button} from 'react-native'
import React, { useCallback, useEffect, useReducer } from 'react'
import styles from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/actions/auth.action'
import { Alert } from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state,action)=>{
    console.log(action)
    if(action.type===FORM_INPUT_UPDATE){
        const updatedValues = {
            ...state.inputValues,
            [action.input]:action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]:action.isValid
        }
        let updatedFormIsValid = true
        for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            inputValues:updatedValues,
            inputValidities:updatedValidities,
            formIsValid:updatedFormIsValid
        }
    }
    return state
}



const AuthScreen = () => {
    const dispatch = useDispatch()
    const [error,setError] = useState(null)
    
    useEffect(()=>{
        if(error){
            Alert.alert('Ha ocurrido un error',error,[{text:'ok'}])
        }
    },[error])

    const [formState,dispatchFormState] = useReducer(formReducer,{
        inputValues:{
            email:'',
            password:''
        },
        inputValidities:{
            email:false,
            password:false
        },
        formIsValid:false
    })

    const handleSignUp = ()=>{
        // dispatch(signUp(email,password))
        console.log(formState)
        console.log(formState.formIsValid)
        if(formState.formIsValid){
            dispatch(signUp(formState.inputValues.email,formState.inputValues.password))
        }else{
            Alert.alert('Formulario invalido','Ingrese email y password validos',[{text:'Ok'}])
        }
    }

const onInputChangeHandler = useCallback((inputIdentifier,inputVlue,inputValidity)=>{
    dispatchFormState({
        type:'FORM_INPUT_UPDATE',
        value:inputVlue,
        isValid:inputValidity,
        input:inputIdentifier
    })
    },[dispatchFormState])

return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={10}
    >
        <View style={styles.card}>
        <Text style={styles.text}>
            Inicie sesion
        </Text>
        <CustomInput 
        style={styles.input} 
        id='email'
        label='Email'
        keyboardType='email-address'
        autoCapitaliza='none'
        autoCorrect={false}
        returnKeyType='next'
        required
        email
        errorText={'Ingrese un email valido'}
        onInputChange={onInputChangeHandler}
        initialValue={''}
        />
        <CustomInput 
        style={styles.input} 
        id='password'
        label='Password'
        keyboardType='default'
        autoCapitaliza='none'
        autoCorrect={false}
        required
        passsword
        errorText={'Ingrese un password valido'}
        onInputChange={onInputChangeHandler}
        initialValue={''}
        secureTextEntry
        />
        <Button
        title='registrar'
        onPress={handleSignUp}
        />
        <Button 
        title='ingresar' 
        // onPress={()=>{onLogIn(registerUsers)}}
        />
        </View>
    </KeyboardAvoidingView>
)
}

export default AuthScreen