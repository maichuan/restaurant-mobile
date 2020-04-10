import styled from 'styled-components'
import Constant from '../../utils/constants'

export const Head = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`

export const Container = styled.View`
  align-items: center;
`
export const ProfileImg = styled.Image`
  width: 120px;
  height: 120px;
  margin: 30px;
  padding-top: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${Constant.tabColor}
  background-color: ${Constant.weakColor}
`
export const Content = styled.KeyboardAvoidingView`
  padding-top: 100px;
  max-width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin: 10px 0px;
  padding: 0px 5px;
  border-radius: 5px;
  border-color: ${Constant.tabColor}
`
export const BGroup = styled.View`
  width: 300px;
  margin: 20px;
`

export const SLButton = styled.TouchableOpacity`
  align-self: stretch;
  background-color: ${Constant.tabColor};
  border: 2px solid ${Constant.tabColor};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`
export const SRButton = styled.TouchableOpacity`
  align-self: stretch;
  background-color: ${Constant.tabColor};
  border: 2px solid ${Constant.tabColor};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`
export const HLine = styled.View`
  align-self: stretch;
  background-color: ${Constant.weakColor};
  border: 1px solid ${Constant.weakColor};
  margin-top: 5px;
  margin-bottom: 5px;
`

export const SText = styled.Text`
  color: white;
  margin: 10px;
  text-align: center;
`
