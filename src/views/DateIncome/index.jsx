import React, { useState, useEffect } from "react";
import { Container, Text, Box } from "./styled";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import { mock } from "./mock";
import { serverClient } from "../../api";
import MenuIncome from "../../components/dateIncome/MenuIncome";

const DateIncome = ({ navigation, spinnerStore, authStore }) => {
  const { date } = navigation.state.params;

  const [data, setData] = useState({ menus: [] });

  const fetchDateIncome = async () => {
    const { data } = await serverClient.get(
      `/summary/${authStore.restaurant.id}/${date.replace(/\//g, "_")}`
    );

    setData(data);
  };

  useEffect(() => {
    fetchDateIncome();
  }, []);

  return (
    <Container>
      {data.menus.map((menu, i) => (
        <MenuIncome key={i} first={i === 0} menu={menu} />
      ))}
      <Text>Total: {data.totalPrice}</Text>
    </Container>
  );
};

DateIncome.navigationOptions = (props) => {
  const { date } = props.navigation.state.params;
  return {
    headerTitle: date,
  };
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(DateIncome);
