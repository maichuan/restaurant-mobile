import React from 'react'
import { View } from 'react-native'

import { observer, inject } from 'mobx-react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import AppNavigator from '../navigators/AppNavigator'

const Main = () => {
    return (
        <View>
            <AppNavigator />
        </View>
    )
}

export default compose(
    inject(({ rootStore }) => ({
        authStore: rootStore.authStore
    })),
    observer,
)(Main)