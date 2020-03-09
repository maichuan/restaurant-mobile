import React, { useState, useEffect } from 'react'
import withSafeArea from '../../hocs/withSafeView'
import { Container, Head, Input, FormBlock, RegButton, RegText } from './styled'

const Register = ({ navigation }) => {
    const [resName, setResName] = useState("")
    const [resEmail, setResEmail] = useState("")
    const [resPhone, setResPhone] = useState("")

    return (
        <Container>
            <Head>Register your restaurant</Head>
            <FormBlock>
                <Input onChangeText={text => { setResName(text) }} placeholder="Restaurant name" />
                <Input onChnageText={text => { setResEmail(text) }} placeholder="Email" />
                <Input onChnageText={text => { setResPhone(text) }} placeholder="Phone number" />
                <RegButton><RegText>Register</RegText></RegButton>
            </FormBlock>
        </Container>
    )
}

export default withSafeArea(Register)