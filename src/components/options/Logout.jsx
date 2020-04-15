import React from "react";
import styled from "styled-components";
import Constant from "../../utils/constants";
import { firebaseApp } from "../../utils/firebase";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

const Container = styled.TouchableOpacity`
    background-color: ${Constant.redColor} 
    justify-content: center;
    align-items: center; 
    align-self: flex-end
    width: 100%;
    height: 60px;
`;
const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

const Logout = ({ navigation, authStore }) => {
  const logOut = () => {
    firebaseApp.auth().signOut();

    authStore.removeAuth();
    navigation.navigate("Login");
  };

  return (
    <Container onPress={logOut}>
      <Text>Log out</Text>
    </Container>
  );
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Logout);
