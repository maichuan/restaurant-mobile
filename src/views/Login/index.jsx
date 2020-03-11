import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
import dismissKeyBoard from '../../hocs/dismissKeyboard'
import {
    Head,
    ProfileImg,
    Input,
    Container,
    BGroup,
    SLButton,
    SRButton,
    VLine,
    SText,
} from './styled'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const signin = () => {
        if (firebaseApp) {
            firebaseApp
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(user => {
                    serverClient.post('/restaurants', {
                        uid: user.user.uid,
                    })
                    navigation.navigate('Main')
                })
                .catch(function (error) {
                    console.log(error)
                    Alert.alert(
                        'Authentication Failed',
                        'Your email or password is wrong',
                        [{ text: 'OK', onPress: () => { } }],
                        { cancelable: false },
                    )
                })
        }
    }

    const register = () => {
        navigation.navigate('Register')
    }

    return (
        <Container
            behavior="padding">
            <>
                <Head>Restaurant management application</Head>
                <ProfileImg source={require('../../../assets/hamburger.jpg')} />
                <Input
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    placeholder="Email Addesss"
                />
                <Input
                    onChangeText={text => {
                        setPass(text)
                    }}
                    secureTextEntry
                    placeholder="Password"
                />
                <BGroup>
                    <SLButton onPress={signin}>
                        <SText>SignIn</SText>
                    </SLButton>
                    <VLine />
                    <SRButton onPress={register}>
                        <SText>Register</SText>
                    </SRButton>
                </BGroup>
            </>
        </Container>
    )
}

Login.propTypes = {
    navigation: PropTypes.object,
}

export default dismissKeyBoard(withSafeArea(Login))
