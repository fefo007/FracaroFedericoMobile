
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ButtonTabNav from './buttomTabNav/ButtomTabNav'
import AuthNavigation from './authNavigation/AuthNavigation';
import { useSelector } from 'react-redux';

const index = () => {

    const userId = useSelector(state => state.auth.userId)

return (
    <NavigationContainer>
        {userId?<ButtonTabNav/>:<AuthNavigation/>}
    </NavigationContainer>
)
}

export default index