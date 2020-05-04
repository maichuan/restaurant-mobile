import React, { useState, useEffect } from 'react'
import Constants from '../../utils/constants'
import { Width, Height } from '../../utils/utils'
import styled from 'styled-components'
import QRCode from 'react-native-qrcode-svg';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Modal = styled.Modal`
`
const Container = styled.View`
    padding-top: ${Height * 0.15 + 'px'};
    align-items: center;
`

const Content = styled.View`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${Constants.weakColor};
    width: ${Width * 0.85 + 'px'};
    height: ${Height * 0.63 + 'px'};
    justify-content: space-between
    align-items: center;
`
const Head = styled.View`
    width: 95%;
    height: 15%;
    margin: 2.5%;
    background-color: ${Constants.veryWeakColor}
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    align-items: center;
`

const Title = styled.Text`
    margin: 6%;
    font-weight: bold;
    font-size: 20px;
    color: ${Constants.strongColor}
`
const FormBox = styled.View`
    flex-direction: row;
    align-items: center;
    height: 8%;
`
const FormHead = styled.Text``

const Form = styled.TextInput`
    margin-left: 10%;
    border-radius: 2px;
    background-color: white;
    width: 20%;
    height: 100%;
`
const BtnGroup = styled.View`
    flex-direction: row;
    height: 12%;
`

const Apply = styled.TouchableOpacity`
    width: 50%;
    background-color: lightgreen;
    border-bottom-right-radius: 10px;
    justify-content: center;
    align-items: center;
`
const Cancel = styled.TouchableOpacity`
    width: 50%;
    background-color: ${Constants.redColor};
    border-bottom-left-radius: 10px;
    justify-content: center;
    align-items: center;
`

const BtnText = styled.Text`
    font-size: 20px;
    color: white;
`

const NewTable = ({ closeModal, visible }) => {

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <Container>
                    <Content>
                        <Head><Title>New Table</Title></Head>
                        <FormBox>
                            <FormHead>Table number</FormHead>
                            <Form keyboardType={"numeric"} />
                        </FormBox>
                        <QRCode
                            size={150}
                            value="wowza"
                            getRef={(c) => { }}
                        />
                        <BtnGroup>
                            <Cancel><BtnText>Cancel</BtnText></Cancel>
                            <Apply onPress={closeModal}><BtnText>Done</BtnText></Apply>
                        </BtnGroup>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default NewTable