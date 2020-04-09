import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import withSafeArea from '../../hocs/withSafeView'
import MapModal from '../../components/restaurant/MapModal'
import {
    Container,
    Content,
    InfoBox,
    EditImg,
    EditTab,
    EditHead,
    EditLocal,
    EditText,
    Img
} from './styled'

const Restaurant = () => {
    const [mapVisible, setMapVisible] = useState(false)
    const [location, setLocation] = useState({})

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
                <EditImg>
                    <Img />
                </EditImg>
                <InfoBox>
                    <EditTab><EditHead>Name</EditHead><EditText>name</EditText></EditTab>
                    <EditTab><EditHead>Description</EditHead><EditText>des</EditText></EditTab>
                    <EditTab><EditHead>Location</EditHead>
                        <EditLocal onPress={openModal}>
                            <EditText>Edit location</EditText>
                            <FontAwesome style={{ marginLeft: 15 }} type='FontAwesome' color='black' name='location-arrow' size={22} />
                        </EditLocal>
                    </EditTab>
                </InfoBox>
            </Content>
        </Container>
    )
}

export default withSafeArea(Restaurant)