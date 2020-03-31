import React from 'react'

import Home from '../views/Home'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

const options = {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        cardStyle: {
            shadowColor: 'transparent',
            backgroundColor: 'transparent',
        },
    }
}

const MainTab = createStackNavigator({
    Home: Home
}, options)

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
        },
    },
)