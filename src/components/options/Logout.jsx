import React from 'react'
import styled from 'styled-components'
import Constant from '../../utils/constants'
import { firebaseApp } from '../../utils/firebase'

const Container = styled.TouchableOpacity`
    background-color: ${Constant.redColor} 
    justify-content: center;
    align-items: center; 
    align-self: flex-end
    width: 100%;
    height: 60px;
`
const Text = styled.Text`
    color: white;
    font-size: 28px;
`

const Logout = ({ navigation }) => {

    const logOut = () => {
        firebaseApp.auth().signOut().then(() => {
            navigation.navigate('Login')
        }).catch((E) => { console.log(E); })
    }

    return (
        <Container onPress={logOut}>
            <Text>Log out</Text>
        </Container>
    )
}

export default Logout