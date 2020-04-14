import React, { useEffect } from "react";
import { View } from "react-native";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import PropTypes from "prop-types";
import AppNavigator from "../navigators/AppNavigator";
import { firebaseApp } from "../utils/firebase";
import { serverClient } from "../api";

const Main = ({ authStore, spinnerStore }) => {
  const fetchUser = async (user) => {
    const { data } = await serverClient.get(`user/${user.uid}?owner=true`);
    if (data.user) {
      console.log(data);
      authStore.setUser(data.user);
      authStore.setRestaurant(data.restaurant);
    }
  };

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        authStore.setAuth(user);
        fetchUser(user);
      }
    });
  }, []);

  return (
    <>
      <AppNavigator />
      {spinnerStore.display && <Spinner />}
    </>
  );
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Main);
