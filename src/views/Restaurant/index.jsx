import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import withSafeArea from '../../hocs/withSafeView'
import MapModal from '../../components/restaurant/MapModal'
import ImgPicker from '../../components/restaurant/ImgPicker'
import MenuList from '../../components/restaurant/MenuList'
import { serverClient } from '../../api'
import {
    Container,
    Content,
    InfoBox,
    EditTab,
    EditHead,
    EditLocal,
    EditContext,
    EditText,
} from './styled'

const Restaurant = ({ navigation }) => {
    const [mapVisible, setMapVisible] = useState(false)
    const [location, setLocation] = useState({})
    const [name, setName] = useState('name')
    const [des, setDes] = useState('des')

    useEffect(() => {

    })

    const openModal = () => {
        setMapVisible(true)
    }

    const closeModal = () => {
        setMapVisible(false)
    }

    const storeLocation = (location) => {
        setLocation(location)
    }

    return (
        <Container>
            <MapModal storeLocation={storeLocation} closeModal={closeModal} visible={mapVisible} />
            <Content>
                <ImgPicker />
                <InfoBox>
                    <EditTab>
                        <EditHead>Name</EditHead>
                        <EditContext>
                            <EditText value={name} onChangeText={(text) => { setName(text) }} />
                            <FontAwesome style={{ marginLeft: 15 }} type='FontAwesome' color='black' name='edit' size={22} />
                        </EditContext>
                    </EditTab>
                    <EditTab>
                        <EditHead>Description</EditHead>
                        <EditContext>
                            <EditText multiline={true} value={des} onChangeText={(text) => { setDes(text) }} />
                            <FontAwesome style={{ marginLeft: 15 }} type='FontAwesome' color='black' name='edit' size={22} />
                        </EditContext>
                    </EditTab>
                    <EditTab><EditHead>Location</EditHead>
                        <EditLocal onPress={openModal}>
                            <Text style={{ color: 'grey' }}>Edit location</Text>
                            <FontAwesome style={{ marginLeft: 15 }} type='FontAwesome' color='black' name='location-arrow' size={22} />
                        </EditLocal>
                    </EditTab>
                </InfoBox>
                <MenuList navigation={navigation} />
            </Content>
        </Container>
    )
}

export default withSafeArea(Restaurant)