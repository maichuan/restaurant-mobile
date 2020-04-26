import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Width, Height } from "../../utils/utils"
import Constant from '../../utils/constants'

const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    margin: 7px;
    width: 95%;
    height: ${Height * 0.15 + "px"}
    border-width: 1.2px;
    border-color: ${Constant.tabColor}
    border-radius: 4px;
`
const Img = styled.Image`
    align-self: center;
    width: 32%;
    height: 100%;
    resize-mode: stretch;
`
const InfoBox = styled.View`
    flex-wrap: wrap;
    width: 68%;
    background-color: ${Constant.veryWeakColor};
`

const Name = styled.Text`
    margin: 10px;
    width: 92%;
    font-size: 16px;
`
const Des = styled.Text`
    font-size: 8px;
`

const MenuCard = ({ data }) => {

    return (
        <Container>
            <Img source={{ uri: data.imgURL }} />
            <InfoBox>
                <Name>{data.name}</Name>
                <Des>{data.description}</Des>
            </InfoBox>
        </Container>
    )
}

export default MenuCard