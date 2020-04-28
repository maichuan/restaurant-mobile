import styled from 'styled-components'
import Constants from '../../utils/constants'
import { Width, Height } from '../../utils/utils'

export const ScrollContainer = styled.ScrollView`
`
export const Container = styled.View`
    align-items: center;
`
export const Content = styled.View`
    margin-top: 10%;
    border-radius: 5px;
    border-width: 1.5px;
    border-color: ${Constants.tabColor}
    width: 80%;
    min-height: ${Height * 0.7 + 'px'};
`
export const Head = styled.View`
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    background-color: ${Constants.tabColor}
`
export const HeadText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: white;
`
export const BottomPart = styled.View`
    align-items: center;
`
export const AddTable = styled.TouchableOpacity`
    border-radius: 10px;
    margin: 10px;
    width: 95%;
    height: ${Height * 0.1 + 'px'};
    background-color: ${Constants.tabColor};
    align-items: center;
    justify-content: center;
`
export const AddTableText = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: ${Constants.veryWeakColor};
`