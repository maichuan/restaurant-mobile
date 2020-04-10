import styled from 'styled-components'
import Constants from '../../utils/constants'

export const Container = styled.ScrollView`
    
`
export const Content = styled.View`
    flex-direction: column;
    align-items: center;
`
export const InfoBox = styled.View`
    min-width: 320px;
    border-color: lightgrey;
    border-width: 1.2px;
    border-radius: 10px;
`

export const EditTab = styled.View`
    min-height: 30px;
    flex-direction: row;
    justify-content: space-between;
    border-color: lightgrey;
    border-bottom-width: 1px;
    margin: 10px;
`
export const EditLocal = styled.TouchableOpacity`
    flex-direction: row;
    width: auto;
`

export const EditHead = styled.Text`
    
`
export const EditContext = styled.View`
    flex-direction: row;
`

export const EditText = styled.TextInput`
    max-width: 100px;
    color: grey;
`
