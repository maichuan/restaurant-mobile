import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import withSafeArea from "../../hocs/withSafeView";
import dismissKeyBoard from "../../hocs/dismissKeyboard";
import { firebaseApp } from "../../utils/firebase";
import { serverClient } from "../../api";
import {
  Container,
  Head,
  Input,
  FormBlock,
  RegButton,
  RegText,
  SafeView,
} from "./styled";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

const Register = ({ navigation, spinnerStore, authStore }) => {
  const [resName, setResName] = useState("");
  const [resEmail, setResEmail] = useState("");
  const [resPhone, setResPhone] = useState("");
  const [resPass, setResPass] = useState("");
  const [username, setUsername] = useState("");

  const validateInput = (name, phone, uname) => {
    if (name === "" || phone === "" || uname === "") {
      return false;
    }
    return true;
  };

  const register = () => {
    if (firebaseApp && validateInput(resName, resPhone, username)) {
      spinnerStore.open();

      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(resEmail, resPass)
        .then(async (user) => {
          const { data } = await serverClient.post("/user/owner", {
            uid: user.user.uid,
            username: username,
            restaurantName: resName,
            phoneno: resPhone,
          });

          if (data.user) {
            const res = await serverClient.get(
              `restaurants/${data.restaurant.id}`
            );
            if (res.data) {
              authStore.setUser(data.user);
              authStore.setRestaurant(res.data);
            }
          }

          navigation.navigate("Main");
          spinnerStore.close();
        })
        .catch(function (error) {
          console.log(error);
          spinnerStore.close();
          Alert.alert(
            "SignUp Failed",
            "Check your email format",
            [{ text: "OK", onPress: () => {} }],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        "SignUp Failed",
        "Incomplete data",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeView>
      <Container>
        <Head>Register your restaurant</Head>
        <FormBlock>
          <Input
            onChangeText={(text) => {
              setResEmail(text);
            }}
            placeholder="Email"
          />
          <Input
            onChangeText={(text) => {
              setResPass(text);
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Input onChangeText={setUsername} placeholder="Username" />
          <Input
            onChangeText={(text) => {
              setResName(text);
            }}
            placeholder="Restaurant name"
          />
          <Input
            onChangeText={(text) => {
              setResPhone(text);
            }}
            placeholder="Phone number"
          />
          <RegButton onPress={register}>
            <RegText>Register</RegText>
          </RegButton>
        </FormBlock>
      </Container>
    </SafeView>
  );
};

export default compose(
  dismissKeyBoard,
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Register);
