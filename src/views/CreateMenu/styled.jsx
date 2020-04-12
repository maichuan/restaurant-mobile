import styled from 'styled-components'
import Constants from '../../utils/constants'

export const Container = styled.ScrollView`
`
export const KAVContent = styled.KeyboardAvoidingView`
`
export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
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
export const InputWrap = styled.View`
    margin-left: 10px;
    width: 180px;
    min-height: 35px;
    height: auto;
    border-width: 1.2px;
    border-radius: 3px;
    justify-content: center;
    border-color: ${Constants.tabColor}
`

export const InputBox = styled.TextInput`
    padding-right: 10px;
    max-width: 175px;
    max-height: 50px;
    text-align: right;
`
export const ImgArea = styled.View`
    align-items: center;
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
export const BottomPart = styled.View`
    margin: 15px;
    width: 305px;
    min-height: 250px;
    align-items: center;
    border-radius: 10px;
    border-width: 1.5px;
    border-color: lightgrey;
`
export const BottomHead = styled.View`
    width: 97%;
    height: 40px;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-color: ${Constants.tabColor}
    border-bottom-width: 1.3px;
    background-color: ${Constants.weakColor}
`
export const BottomHeadText = styled.Text`
    align-self: center;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 500;
    color: ${Constants.strongColor}
`
export const TouchableIcon = styled.TouchableOpacity`
    align-self: center;
`
export const InstructionWrap = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Instruction = styled.Text`
    padding-top: 20px;
    margin: 30px;
    text-align: center;
    font-style: italic;
    font-size: 20px;
    color: lightgrey;
`
