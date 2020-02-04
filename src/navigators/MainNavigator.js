import React from 'react'

import Main from '../views/Main'
import { createStackNavigator } from 'react-navigation-stack'

export default createStackNavigator(
    {
        Main: Main
    }
)