import React, { useState, useEffect } from 'react'
import { StyleSheet, CheckBox } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components'
import RNPickerSelect from 'react-native-picker-select'
import Constants from '../../utils/constants'

const Container = styled.View`
    width: 97%;
    min-height: 100px;
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
    text-align: center;
    width: 190px;
    height: 25px;
`
const FormText = styled.Text`
    border-width: 1px;
    border-color: grey;
    margin-left: 10px;
    align-self: stretch;
    text-align: center;
    width: 190px;
    height: 25px;
`

const OptionBox = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    border-width: 1px;
    border-color: lightgrey;
    align-self: center;
    width: 270px;
`
const OptionTab = styled.View`
    flex-direction: row;
    background-color: lightgrey;
    height: 25px;
    width: 100%;
`
const ApplyTab = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: lightgreen;
    height: 25px;
    width: 100%;
`
const ApplyText = styled.Text`
    color: white;
    font-weight: bold;
    align-self: center;
`

const OptionHead = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 12px;
    align-self: center;
    padding-left: 5px;
`
const ChoiceTab = styled.View`
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    border-bottom-width: 1px;
    margin-bottom: 5px;
    width: 97%;
    height: 35px;
    
`
const Choice = styled.TextInput`
    width: 85%;
    height: 25px;
    margin-left: 10px;
    background-color: ${Constants.veryWeakColor}
`
const AppliedChoice = styled.Text`
    width: 85%;
    height: 25px;
    margin-left: 10px;
    text-align: center;
    background-color: ${Constants.weakColor}
`
const ButtonTab = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: lightgreen;
    height: 25px;
    width: 50%;
`
const ButtonRow = styled.View`
    flex-direction: row;
`

const TouchableIcon = styled.TouchableOpacity`
    margin: 5px;
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

const AdditionalCard = ({ index, editOption, setAdditionalPending, cancelAdditional }) => {
    const [type, setType] = useState()
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([])
    const [choice, setChoice] = useState('')
    const [completeStat, setCompleteStat] = useState(false)

    const placeholder = {
        label: 'Pick a type of this question',
        value: null,
        color: 'lightgrey',
    }

    const addChoice = () => {
        setChoices([...choices, choice])
        setChoice('')
    }

    const clearChoice = (item) => {
        let index = choices.indexOf(item)
        choices.splice(index, 1)
        let newchoices = choices.concat()
        setChoices(newchoices)
    }

    const applyAdditional = () => {
        editOption(index, {
            question: question,
            type: type,
            choices: choices
        })
        setCompleteStat(true)
        setAdditionalPending(false)
    }

    const completeAdditionalCard = () => {
        return (
            <Container>
                <FormTab>
                    <HeadWrap><HeadText>Question</HeadText></HeadWrap>
                    <FormText>{question}</FormText>
                </FormTab>
                <FormTab>
                    <HeadWrap><HeadText>Type</HeadText></HeadWrap>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={type}
                        disabled={true}
                        items={[
                            { label: 'Single option', value: 1 },
                            { label: 'Multiple options', value: 0 },
                            { label: 'Default note', value: 3 }
                        ]}
                    />
                </FormTab>
                <OptionBox>
                    <OptionTab><OptionHead>Choices</OptionHead></OptionTab>
                    {choices.map(item => {
                        return <ChoiceTab>
                            <FontAwesome type='FontAwesome' name='check' size={25} />
                            <AppliedChoice>{item}</AppliedChoice>
                        </ChoiceTab>
                    })}

                </OptionBox>
                <ButtonRow>
                    <ButtonTab onPress={() => { setCompleteStat(false) }}>
                        <ApplyText>Edit</ApplyText>
                    </ButtonTab>
                    <ButtonTab style={{ backgroundColor: Constants.redColor }}>
                        <ApplyText>Delete</ApplyText>
                    </ButtonTab>
                </ButtonRow>
            </Container>
        )
    }

    const renderEditOption = () => {
        switch (type) {
            case 0:
            case 1:
                return (
                    <OptionBox>
                        <OptionTab><OptionHead>Add choice</OptionHead></OptionTab>
                        {choices.map(item => {
                            return <ChoiceTab>
                                <TouchableIcon onPress={() => { clearChoice(item) }}>
                                    <FontAwesome name='remove' type='FontAwesome' size={26} />
                                </TouchableIcon>
                                <AppliedChoice>{item}</AppliedChoice>
                            </ChoiceTab>
                        })}
                        <ChoiceTab>
                            <TouchableIcon onPress={addChoice}><FontAwesome name='plus-square-o' type='FontAwesome' size={26} /></TouchableIcon>
                            <Choice value={choice} onChangeText={text => { setChoice(text) }} />
                        </ChoiceTab>
                        <ApplyTab onPress={applyAdditional}>
                            <ApplyText>Apply</ApplyText>
                        </ApplyTab>
                    </OptionBox>
                )
            case 3:
                return (
                    <ApplyTab onPress={applyAdditional}>
                        <ApplyText>Apply</ApplyText>
                    </ApplyTab>
                )
            default:
                return <></>
        }
    }

    return (
        completeStat ?
            <>
                {completeAdditionalCard()}
            </> :
            <Container>
                <FormTab>
                    <HeadWrap><HeadText>Question</HeadText></HeadWrap>
                    <FormInput value={question} onChangeText={text => { setQuestion(text) }}></FormInput>
                </FormTab>
                <FormTab style={{ marginBottom: '3%' }}>
                    <HeadWrap><HeadText>Type</HeadText></HeadWrap>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        placeholder={placeholder}
                        value={type}
                        onValueChange={(value) => { setType(value) }}
                        items={[
                            { label: 'Single option', value: 1 },
                            { label: 'Multiple options', value: 0 },
                            { label: 'Default note', value: 3 }
                        ]}
                    />
                </FormTab>
                {renderEditOption()}
                <ApplyTab onPress={cancelAdditional} style={{ backgroundColor: Constants.redColor }}>
                    <ApplyText>Cancel</ApplyText>
                </ApplyTab>
            </Container>
    )
}

export default AdditionalCard

// <TouchableIcon style={{ margin: 0, alignSelf: 'flex-end', borderWidth: 1, borderColor: 'red' }}>
                //     <FontAwesome type='FontAwesome' name='close' color='red' size={18} />
                // </TouchableIcon>