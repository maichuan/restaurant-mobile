import React from 'react'

import Login from '../views/Login'
import Register from '../views/Register'
import { createStackNavigator } from 'react-navigation-stack'

const options = {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        cardStyle: {
            shadowColor: 'transparent',
            backgroundColor: 'transparent',
        },
    },
}

export default createStackNavigator(
    {
        Login: Login,
        Register: Register
    },
    options
)