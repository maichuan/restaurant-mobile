import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import RNPickerSelect from 'react-native-picker-select'
import Constants from '../../utils/constants'

const Container = styled.View`
    width: 97%;
    height: 100px;
    margin: 5px;
    border-width: 1px;
    border-color: lightgrey;
`
const FormTab = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row;
`
const HeadWrap = styled.View`
    width: 70px;
    height: 25px;
    justify-content: center;
    border-right-width: 1px;
    border-right-color: grey;
    background-color: lightgrey;
`
const HeadText = styled.Text`
    font-size: 12px;
    padding-left: 10px;
`
const FormInput = styled.TextInput`
    border-width: 1px;
    border-color: grey;
    margin-left: 10px;
    align-self: stretch;
    width: 190px;
    height: 25px;
`
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 190,
        height: 25,
        marginLeft: 10,
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        color: 'black',
    }
})

const AdditionalCard = ({ }) => {
    const [type, setType] = useState(0)

    const placeholder = {
        label: 'Pick a type of this question',
        value: null,
        color: 'lightgrey',
    }

    const showQuestionEdit = () => {

    }

    return (
        <Container>
            <FormTab>
                <HeadWrap><HeadText>Question</HeadText></HeadWrap>
                <FormInput></FormInput>
            </FormTab>
            <FormTab>
                <HeadWrap><HeadText>Type</HeadText></HeadWrap>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={placeholder}
                    onValueChange={(value) => { setType(value) }}
                    items={[
                        { label: 'Single option', value: 1 },
                        { label: 'Multiple options', value: 0 },
                        { label: 'Custom note', value: 2 }
                    ]}
                />
            </FormTab>
        </Container>
    )
}

export default AdditionalCard