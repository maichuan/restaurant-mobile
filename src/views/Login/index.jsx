import React, { useState, useEffect } from "react";
import { Alert, Platform } from "react-native";
import PropTypes from "prop-types";
import { firebaseApp } from "../../utils/firebase";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import withSafeArea from "../../hocs/withSafeView";
import dismissKeyBoard from "../../hocs/dismissKeyboard";
import {
  Head,
  ProfileImg,
  Content,
  Input,
  Container,
  BGroup,
  SLButton,
  SRButton,
  HLine,
  SText,
  SafeView,
} from "./styled";

const Login = ({ navigation, authStore }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (authStore.auth.uid) {
      navigation.navigate("Home");
    }
  }, [authStore.auth]);

  const signin = () => {
    if (firebaseApp) {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((user) => {
          navigation.navigate("Main");
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert(
            "Authentication Failed",
            "Your email or password is wrong",
            [{ text: "OK", onPress: () => {} }],
            { cancelable: false }
          );
        });
    }
  };

  const register = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeView>
      <Container>
        <ProfileImg />
        <Content behavior={Platform.Os == "ios" ? "padding" : "height"}>
          <Input
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="Email Addesss"
          />
          <Input
            onChangeText={(text) => {
              setPass(text);
            }}
            secureTextEntry
            placeholder="Password"
          />
          <BGroup>
            <SLButton onPress={signin}>
              <SText>SignIn</SText>
            </SLButton>
            <HLine />
            <SRButton onPress={register}>
              <SText>Register</SText>
            </SRButton>
          </BGroup>
        </Content>
      </Container>
    </SafeView>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default compose(
  dismissKeyBoard,
  // withSafeArea,
  inject(({ rootStore }) => ({
    authStore: rootStore.authStore,
  })),
  observer
)(Login);
