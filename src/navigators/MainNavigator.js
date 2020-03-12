import React from 'react'

import Home from '../views/Home'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

const MainTab = createStackNavigator({
    Home: Home
})

const TabNav = createBottomTabNavigator({
    MainTab
},
    {
        initialRouteName: 'MainTab',
    })

export default createStackNavigator(
    {
        TabNav
    },
    {
        mode: 'modal',
        headerMode: 'none',
        defaultNavigationOptions: {
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
        },
    },
)