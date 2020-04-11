import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Constants from '../../utils/constants'
import { FontAwesome } from '@expo/vector-icons'

const Container = styled.View`
    margin-top: 20px;
    width: 320px;
    min-height: 350px;
    border-radius: 10px;
    border-width: 1.5px;
    border-color: lightgrey;
`
const Head = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    width: 96%;
    height: 45px;
    margin-top: 6px;
    background-color: ${Constants.weakColor}
    border-color: ${Constants.tabColor}
    border-bottom-width: 1.5px; 
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`
const HeadText = styled.Text`
    padding-left: 15px;
    font-size: 20px;
    font-weight: 500;
    color: ${Constants.strongColor}
`
const AddBtn = styled.TouchableOpacity`
`
const Content = styled.View``

const MenuList = ({ navigation }) => {

    const toCreateMenu = () => {
        navigation.navigate('CreateMenu')
    }

    return (
        <Container>
            <Head>
                <HeadText>Menu</HeadText>
                <AddBtn onPress={toCreateMenu}>
                    <FontAwesome style={{ paddingRight: 10 }} color={Constants.strongColor} type='FontAwesome' name='plus-square' size={25} />
                </AddBtn>
            </Head>
        </Container>
    )
}

export default MenuList