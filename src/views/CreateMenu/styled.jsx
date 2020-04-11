import styled from 'styled-components'
import Constants from '../../utils/constants'

export const Container = styled.View`
    align-items: center;
`
export const TopPart = styled.View`
    justify-content: center;
`
export const InfoBox = styled.View`
    justify-content: center;
`
export const InfoTab = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px;
    margin-left: 20px;
    height: 30px;
`
export const HeadWrap = styled.View`
    background-color: lightgrey;
    justify-content: center;
    width: 110px;
    height: 35px;
    border-right-width: 1.5px;
`

export const HeadText = styled.Text`
    color: white;
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
`
export const InputBox = styled.TextInput`
    margin-left: 10px;
    width: 150px;
    height: 35px;
    border-width: 1.2px;
    border-radius: 3px;
    border-color: ${Constants.tabColor}
`
export const ImgArea = styled.TouchableOpacity`

`

export const EditImg = styled.ImageBackground`
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 20px;
    width: 120px;
    height: 120px;
    background-color: lightgrey;
    resize-mode: stretch;
`