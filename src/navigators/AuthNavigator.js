import React from 'react'

import Login from '../views/Login'
import SignUp from '../views/SignUp'
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
        SignUp: SignUp
    },
    options
)