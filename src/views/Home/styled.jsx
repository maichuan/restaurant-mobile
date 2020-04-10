import styled from 'styled-components'
import Constants from '../../utils/constants'

export const Container = styled.View`
    align-items: center;
`
export const HeadBox = styled.View`
    width: 100%;
    height: 130px;
    background-color: ${Constants.tabColor};
    flex-direction: column;
    justify-content: center;
`
export const HeadText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: white;
    align-self: center;
    padding-top: 30px;
`
export const StatusBox = styled.View`
    border-bottom-width: 1.3px;
    border-color: grey;
    width: 320px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`
export const StatusText = styled.Text`
    font-size: 24px;
    color: grey;
`
export const StatusToggle = styled.TouchableOpacity`
    border-radius: 3px;
    width: 150px;
    height: 35px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
`
export const OrderHeader = styled.View`
    background-color: ${Constants.strongColor};
    flex-direction: column;
    justify-content: center;
`
export const OrderHeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const OrderBox = styled.View`
    min-width: 320px;
    height: 300px;
    border-width: 1.3px;
    border-color: ${Constants.strongColor};
    border-radius: 3px;
    margin-top: 30px;
`
export const OrderContent = styled.ScrollView``