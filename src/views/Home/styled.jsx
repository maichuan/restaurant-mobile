import styled from 'styled-components'

export const Container = styled.View`
    align-items: center;
`
export const HeadBox = styled.View`
    width: 100%;
    height: 100px;
    background-color: red;
    flex-direction: column;
    justify-content: center;
`
export const HeadText = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: white;
    align-self: center;
`
export const StatusBox = styled.View`
    border-bottom-width: 1.3px;
    border-color: grey;
    min-width: 320px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`
export const StatusText = styled.Text`
    font-size: 24px;
    color: grey;
`
export const Switch = styled.Switch`

`
export const OrderHeader = styled.View`
    background-color: grey;
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
    border-color: grey;
    border-radius: 3px;
    margin-top: 30px;
`
export const OrderContent = styled.ScrollView``