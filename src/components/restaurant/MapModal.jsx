import React, { useState, useEffect, Component } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Width, Height } from "../../utils/utils";

const CModal = styled.Modal`
  /* width: 400px; */
`;
const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  justify-content: center;
  align-items: center;
  width: ${Width / 1.1 + "px"};
  border-radius: 8px;
  border-width: 5px;
  border-color: white;
  margin-top: 50px;
  /* shadow-color: #000;
    shadow-offset: {
      width: 0,
      height: 2
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5; */
`;
const Header = styled.View`
  width: 100%;
  height: 35px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;
const Footer = styled.View`
    width: 100%;
    height: 35px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;
const BTN = styled.Button``;
const CurrentLocal = styled.TouchableOpacity`
  margin: 5px;
  margin-right: 10px;
`;
const Map = styled(MapView)`
  height: ${Height / 1.35 + "px"};
  width: ${Width / 1.1 + "px"};
`;

const MapModal = ({ visible, closeModal, storeLocation }) => {
  const initialState = {
    region: {
      latitude: 13.846267,
      longitude: 100.568651,
      latitudeDelta: 0.0882,
      longitudeDelta: 0.0421,
    },
    marker: { comp: <></>, c: {} },
  };
  const [{ region, marker }, setState] = useState(initialState);

  const getCurrentLocal = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.warn("Permission was not granted");
    }
    let local = await Location.getCurrentPositionAsync({});
    let c = {
      latitude: local.coords.latitude,
      longitude: local.coords.longitude,
    }
    setState({
      region: {
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta
      },
      marker: { comp: <Marker coordinate={c} />, c: c }
    })
  };

  const handleMarker = (coordinate) => {
    setState({ region: region, marker: { comp: <Marker coordinate={coordinate} />, c: coordinate } });
  };

  return (
    <CModal visible={visible} animationType="slide" transparent={true}>
      <Container>
        <Content>
          <Header>
            <BTN
              onPress={() => {
                closeModal();
                setState(initialState);
              }}
              title="Close"
            />
            <CurrentLocal onPress={getCurrentLocal}>
              <FontAwesome
                type="FontAwesome"
                name="location-arrow"
                size={20}
                color="grey"
              />
            </CurrentLocal>
          </Header>
          <Map
            region={region}
            onRegionChangeComplete={r => { setState({ region: r, marker: marker }) }}
            onPress={(event) => {
              handleMarker(event.nativeEvent.coordinate);
            }}
            onMarkerPress={() => {
              setState({ region: region, marker: { comp: <></>, c: {} } });
            }}
          >
            {marker.comp}
          </Map>
          <Footer>
            <BTN onPress={() => { storeLocation(marker.c); closeModal(); }} title="Apply" />
          </Footer>
        </Content>
      </Container>
    </CModal>
  );
};

export default MapModal;
