import React, { useState, useEffect } from 'react'
import withSafeArea from '../../hocs/withSafeView'
import dismissKeyBoard from '../../hocs/dismissKeyboard'
import { serverClient } from '../../api'
import { PropTypes } from 'mobx-react'
import { FontAwesome } from '@expo/vector-icons'
import {
    Container,
    ImgArea,
    EditImg,
    TopPart,
    InfoBox,
    InfoTab,
    HeadWrap,
    HeadText,
    InputBox,
} from './styled'


const CreateMenu = ({ navigation }) => {
    return (
        <Container>
            <TopPart>
                <ImgArea>
                    <EditImg><FontAwesome type='FontAwesome' name='image' color='grey' size={35} /></EditImg>
                </ImgArea>
                <InfoBox>
                    <InfoTab>
                        <HeadWrap><HeadText>Name</HeadText></HeadWrap>
                        <InputBox />
                    </InfoTab>
                    <InfoTab>
                        <HeadWrap><HeadText>Description</HeadText></HeadWrap>
                        <InputBox />
                    </InfoTab>
                </InfoBox>
            </TopPart>
        </Container>
    )
}

CreateMenu.propTypes = {
    navigation: PropTypes.object
}

CreateMenu.navigationOptions = props => {
    return { headerShown: false }
}

export default dismissKeyBoard(withSafeArea(CreateMenu))