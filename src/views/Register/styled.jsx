import styled from 'styled-components'

export const Container = styled.KeyboardAvoidingView`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
`
export const Head = styled.Text`
    font-size: 24px;
    margin: 15px;
    margin-bottom: 100px;
`
export const FormBlock = styled.View`
`
export const Input = styled.TextInput`
    height: 40px;
    min-width: 300px;
    border-color: gray;
    border-width: 1px;
    margin: 10px 0px;
    padding: 0px 5px;
    border-radius: 5px;
`
export const RegButton = styled.TouchableOpacity`
    min-width: 300px;
    background-color: grey;
    border: 2px solid grey;
    border-radius: 5px;
    margin-top: 10px;
`
export const RegText = styled.Text`
    color: white;
    margin: 10px;
    text-align: center;
`