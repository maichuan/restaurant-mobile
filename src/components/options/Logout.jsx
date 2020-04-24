import React from "react";
import styled from "styled-components";
import Constant from "../../utils/constants";
import { firebaseApp } from "../../utils/firebase";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";
import { Width } from "../../utils/utils";

const Container = styled.TouchableOpacity`
  background-color: ${Constant.redColor};
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${Width / 3 + "px"};
  height: ${Width / 3 + "px"};
  border-radius: 100px;
  margin: 10px;
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
