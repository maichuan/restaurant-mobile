import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import withSafeArea from "../../hocs/withSafeView";
import MapModal from "../../components/restaurant/MapModal";
import ImgPicker from "../../components/restaurant/ImgPicker";
import MenuList from "../../components/restaurant/MenuList";
import { serverClient } from "../../api";
import {
  Container,
  Content,
  InfoBox,
  EditTab,
  EditHead,
  EditLocal,
  EditContext,
  EditText,
  UpdateButton,
  UpdateText,
} from "./styled";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

const Restaurant = ({ navigation, spinnerStore, authStore }) => {
  const [mapVisible, setMapVisible] = useState(false);
  const [location, setLocation] = useState({});
  const [name, setName] = useState("name");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (authStore.restaurant.id) {
      setName(authStore.restaurant.name);
      setPhone(authStore.restaurant.phoneno);
      setAddress(authStore.restaurant.address);
    }
  }, []);

  const updateData = () => {
    serverClient.put(`/restaurants/${authStore.restaurant.id}`, {
      name,
      phoneno: phone,
      address,
    });
  };

  const openModal = () => {
    setMapVisible(true);
  };

  const closeModal = () => {
    setMapVisible(false);
  };

  const storeLocation = (location) => {
    const { latitude, longitude } = location;
    setLocation({ latitude, longitude });
  };

  return (
    <Container>
      <MapModal
        storeLocation={storeLocation}
        closeModal={closeModal}
        visible={mapVisible}
      />
      <Content>
        <ImgPicker />
        <InfoBox>
          <EditTab>
            <EditHead>Name</EditHead>
            <EditContext>
              <EditText
                placeholder="input name here"
                multiline={true}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
              <FontAwesome
                style={{ marginLeft: 15 }}
                type="FontAwesome"
                color="black"
                name="edit"
                size={22}
              />
            </EditContext>
          </EditTab>
          <EditTab>
            <EditHead>Phone No.</EditHead>
            <EditContext>
              <EditText
                placeholder="input phone no. here"
                multiline={true}
                value={phone}
                onChangeText={(text) => {
                  setPhone(text);
                }}
              />
              <FontAwesome
                style={{ marginLeft: 15 }}
                type="FontAwesome"
                color="black"
                name="edit"
                size={22}
              />
            </EditContext>
          </EditTab>
          <EditTab>
            <EditHead>Address</EditHead>
            <EditContext>
              <EditText
                placeholder="input address here"
                multiline={true}
                value={address}
                onChangeText={(text) => {
                  setAddress(text);
                }}
              />
              <FontAwesome
                style={{ marginLeft: 15 }}
                type="FontAwesome"
                color="black"
                name="edit"
                size={22}
              />
            </EditContext>
          </EditTab>
          <EditTab>
            <EditHead>Location</EditHead>
            <EditLocal onPress={openModal}>
              <Text style={{ color: "#4a2700" }}>Edit location</Text>
              <FontAwesome
                style={{ marginLeft: 15 }}
                type="FontAwesome"
                color="black"
                name="location-arrow"
                size={22}
              />
            </EditLocal>
          </EditTab>
        </InfoBox>
        <UpdateButton activeOpacity={0.8} onPress={updateData}>
          <UpdateText>Update</UpdateText>
        </UpdateButton>
        <MenuList navigation={navigation} />
      </Content>
    </Container>
  );
};

export default compose(
  withSafeArea,
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Restaurant);
