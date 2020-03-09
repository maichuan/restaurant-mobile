import React, { useState, useEffect } from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { firebaseApp } from '../../utils/firebase'

import withSafeArea from '../../hocs/withSafeView'
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
                .then(() => {
                    firebaseApp
                        .auth()
                        .currentUser.getIdToken(/* forceRefresh */ true)
                        .then(function (idToken) {
                            // Send token to your backend via HTTPS
                            // ...
                            console.log('login success');
                            navigation.navigate('Main')
                        })
                        .catch(function (error) {

                        })
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
        // if (firebaseApp) {
        //     firebaseApp
        //         .auth()
        //         .createUserWithEmailAndPassword(email, pass)
        //         .catch(function (error) {
        //             console.log(error)
        //             Alert.alert(
        //                 'SignUp Failed',
        //                 'Check your email format',
        //                 [{ text: 'OK', onPress: () => { } }],
        //                 { cancelable: false },
        //             )
        //         })
        // }
        navigation.navigate('Register')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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
        </TouchableWithoutFeedback>
    )
}

Login.propTypes = {
    navigation: PropTypes.object,
}

export default withSafeArea(Login)
