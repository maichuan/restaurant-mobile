import React from 'react'
import { View } from 'react-native'

import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { firebaseApp } from './src/utils/firebase'
import AppNavigator from '../navigators/AppNavigator'

const Main = () => {
    return (
        <View>
            <AppNavigator />
        </View>
    )
}