import React, { useState, useEffect } from 'react'
import withSafeArea from '../../hocs/withSafeView'
import dismissKeyBoard from '../../hocs/dismissKeyboard'
import { firebaseApp } from '../../utils/firebase'
import { serverClient } from '../../api'
import { Container, Head, Input, FormBlock, RegButton, RegText } from './styled'

const Register = ({ navigation }) => {
    const [resName, setResName] = useState("")
    const [resEmail, setResEmail] = useState("")
    const [resPhone, setResPhone] = useState("")
    const [resPass, setResPass] = useState("")

    const register = () => {
        navigation.navigate('Main');
        // if (firebaseApp) {
        //     firebaseApp
        //         .auth()
        //         .createUserWithEmailAndPassword(resEmail, resPass)
        //         .then(user => {
        //             serverClient.post('restaurants', {
        //                 uid: user.user.uid,
        //             })

        //         })
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
    }

    return (
        <Container>
            <Head>Register your restaurant</Head>
            <FormBlock>
                <Input onChangeText={text => { setResName(text) }} placeholder="Restaurant name" />
                <Input onChangeText={text => { setResEmail(text) }} placeholder="Email" />
                <Input onChangeText={text => { setResPhone(text) }} placeholder="Phone number" />
                <Input onChangeText={text => { setResPass(text) }} placeholder="Password" secureTextEntry={true} />
                <RegButton onPress={register}><RegText>Register</RegText></RegButton>
            </FormBlock>
        </Container>
    )
}

export default dismissKeyBoard(withSafeArea(Register))