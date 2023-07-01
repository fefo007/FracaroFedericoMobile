import { View, Text, KeyboardAvoidingView,TextInput, Button} from 'react-native'
import React, { useCallback, useEffect, useReducer } from 'react'
import styles from './styles'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '../../store/actions/auth.action'
import { Alert } from 'react-native'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButtom from '../../components/customButton/CustomButtom'
import CustomModal from '../../components/customModal/CustomModal'
import { showError } from '../../store/actions/error.action'
import {getProducts} from '../../store/actions/products.action'
// import {postProducts} from '../../store/actions/products.action' 
// import { products } from '../../data/prodToFirebase'


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'


const formReducer = (state,action)=>{

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
    const err = useSelector(state=>state.error.error)
    const p=useSelector(state=>state.products.products)
    const [modalOn,setModalOn] = useState(false)

    // PARA CARGAR PRODUCTOS A FIREBASE
    // const putProd = ()=>{
    //     dispatch(postProducts(products)) 
    // }
    const cleanErr = ()=>{
        dispatch(showError('null'))
    }
    useEffect(()=>{
        dispatch(getProducts())
        if(error){
            Alert.alert('Ha ocurrido un error',error,[{text:'ok'}])
        }
    },[error])

    const showErr = (err)=>{
        if(err!==null){
            setModalOn(true)
        }
    }
    const closeModal = ()=>{
        setModalOn(false)
        cleanErr()
    }
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
        if(formState.formIsValid){
            dispatch(signUp(formState.inputValues.email,formState.inputValues.password))
            showErr()
        }else{
            Alert.alert('Formulario invalido','Ingrese email y password validos',[{text:'Ok'}])
        }
    }

    const handleSignIn = ()=>{
        if(formState.formIsValid){
            dispatch(signIn(formState.inputValues.email,formState.inputValues.password))
            showErr()
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
    keyboardVerticalOffset={50}
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
        <CustomButtom
        buttomName={'Registrarce'}
        buttonAction={handleSignUp}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        <CustomButtom
        buttomName={'Logearse'}
        buttonAction={handleSignIn}
        styleimageContainer={styles.imageContainer}
        styleContainer={styles.buttonContainer}
        styletextContainer={styles.textContainer}
        styleText={styles.buttomText}
        />
        </View>
        <CustomModal
        isVisible={modalOn}
        content={err}
        closeIt={closeModal}
        />
    </KeyboardAvoidingView>
)
}

export default AuthScreen