import React, { useState, useEffect } from 'react'
import Logout from '../../components/options/Logout'
import { Container } from './styled'

const Options = ({ navigation }) => {

    return (
        <Container>
            <Logout navigation={navigation} />
        </Container>
    )
}

export default Options