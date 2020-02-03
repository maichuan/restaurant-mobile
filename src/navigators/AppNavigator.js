import React from 'react'
import { firebaseApp } from '../utils/firebase'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'

const user = (firebaseApp.auth().currentUser === null)

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthNavigator,
        Main: MainNavigator
    }, {
        initialRouteName: user ? 'Auth' : 'Main',
    }),
)