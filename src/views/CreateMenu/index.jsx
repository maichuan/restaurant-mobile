import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import withSafeArea from '../../hocs/withSafeView'
import dismissKeyBoard from '../../hocs/dismissKeyboard'
import ImgPicker from '../../components/restaurant/ImgPicker'
import AdditionalCard from '../../components/createmenu/AdditionalCard'
import Constants from '../../utils/constants'
import { serverClient } from '../../api'
import { PropTypes } from 'mobx-react'
import { FontAwesome } from '@expo/vector-icons'
import {
    Container,
    KAVContent,
    Content,
    ImgArea,
    TopPart,
    InfoBox,
    InfoTab,
    HeadWrap,
    HeadText,
    InputWrap,
    InputBox,
    BottomPart,
    BottomHead,
    BottomHeadText,
    TouchableIcon,
    Instruction,
    InstructionWrap,
} from './styled'


const CreateMenu = ({ navigation }) => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [price, setPrice] = useState(0.0)
    const [additionals, setAdditionals] = useState([])

    const createMenu = () => {

    }

    const createAdditional = () => {
        setAdditionals([...additionals, <AdditionalCard />])
    }

    const showInstruction = () => {
        return additionals.length > 0 ? <></> : <InstructionWrap>
            <Instruction>"You can add some option for your dish here"</Instruction>
        </InstructionWrap>
    }

    return (
        <Container>
            <KAVContent behavior={Platform.Os == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <Content>
                    <TopPart>
                        <ImgArea>
                            <ImgPicker storagePath={''} />
                        </ImgArea>
                        <InfoBox>
                            <InfoTab>
                                <HeadWrap><HeadText>Name</HeadText></HeadWrap>
                                <InputWrap><InputBox onChangeText={(text) => {
                                    setName(text)
                                }} placeholder={'Name this dish'} maxLength={60} multiline={true} value={name} /></InputWrap>
                            </InfoTab>
                            <InfoTab>
                                <HeadWrap><HeadText>Description</HeadText></HeadWrap>
                                <InputWrap><InputBox onChangeText={(text) => {
                                    setDes(text)
                                }} placeholder={'Add in some description'} maxLength={100} multiline={true} value={des} /></InputWrap>
                            </InfoTab>
                            <InfoTab>
                                <HeadWrap><HeadText>Price</HeadText></HeadWrap>
                                <InputWrap><InputBox onChangeText={(text) => {
                                    setPrice(text)
                                }} placeholder={'0.00'} keyboardType={'numeric'} value={price} /></InputWrap>
                            </InfoTab>
                        </InfoBox>
                    </TopPart>
                    <BottomPart>
                        <BottomHead>
                            <BottomHeadText>Additional</BottomHeadText>
                            <TouchableIcon onPress={createAdditional}>
                                <FontAwesome style={{ paddingRight: 10 }} color={Constants.strongColor} type='FontAwesome' name='plus-square' size={25} />
                            </TouchableIcon>
                        </BottomHead>
                        {showInstruction()}
                        {additionals.map(item => {
                            return item
                        })}
                    </BottomPart>
                </Content>
            </KAVContent>
        </Container>
    )
}

CreateMenu.propTypes = {
    navigation: PropTypes.object
}

// CreateMenu.navigationOptions = props => {
//     return {
//         tabBar: ({ }) => ({
//             visible: false
//         })
//     }
// }

export default withSafeArea(CreateMenu)