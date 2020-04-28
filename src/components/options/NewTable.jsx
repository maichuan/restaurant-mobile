import React, { useState, useEffect } from 'react'
import Constants from '../../utils/constants'
import { Width, Height } from '../../utils/utils'
import styled from 'styled-components'

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
    width: ${Width * 0.85 + 'px'}
    height: ${Height * 0.63 + 'px'}
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

const Apply = styled.TouchableOpacity`
    width: ${Width * 0.85 + 'px'}
    height: 12%;
    background-color: lightgreen;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const NewTable = ({ closeModal, visible }) => {

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <Container>
                <Content>
                    <Head><Title>New Table</Title></Head>
                </Content>
                <Apply onPress={closeModal} />
            </Container>
        </Modal>
    )
}

export default NewTable