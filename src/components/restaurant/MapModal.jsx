import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import MapView from 'react-native-maps'

const CModal = styled.Modal`
`
const Container = styled.View`
    justify-content: center;
    align-items: center;
`
const Content = styled.View`
    justify-content: center;
    align-items: center;
    width: 305px;
    border-radius: 8px;
    border-width: 5px;
    border-color: white;
    margin-top: 50px;
    shadow-color: #000;
    shadow-offset: {
      width: 0,
      height: 2
    };
    shadow-opacity: 0.25px;
    shadow-radius: 3.84px;
    elevation: 5;
`
const Header = styled.View`
    width: 100%;
    height: 35px;
    background-color: white;
    flex-direction: row;
`
const Cancel = styled.Button`
`

const MapModal = ({ visible, closeModal }) => {

    return (
        <CModal visible={visible} animationType="slide"
            transparent={true} >
            <Container>
                <Content>
                    <Header><Cancel onPress={closeModal} title='Close' /></Header>
                    <MapView style={{
                        width: 300,
                        height: 500,
                        borderRadius: 2,
                    }} initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} />
                </Content>
            </Container>
        </CModal>
    )
}

export default MapModal