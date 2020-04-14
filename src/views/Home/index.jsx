import React, { useEffect, useState } from "react";
import { Text, Alert } from "react-native";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import Constants from "../../utils/constants";
import { serverClient } from "../../api";
import OrderCard from "../../components/home/OrderCard";
import {
  Container,
  HeadBox,
  HeadText,
  StatusBox,
  StatusText,
  StatusToggle,
  OrderBox,
  OrderHeader,
  OrderHeaderText,
  OrderContent,
  SafeView,
} from "./styled";
import DynamicRefreshView from "../../components/common/DynamicRefreshView";
import { withTheme } from "styled-components";

const Home = ({ navigation, spinnerStore, authStore }) => {
  const [data, setData] = useState([]);
  const [resStatus, setResStatus] = useState(false);
  const [statusColor, setStatusColor] = useState({
    backgroundColor: Constants.redColor,
  });
  const [statusText, setStatusText] = useState("Close");

  // useEffect(() => {
  //     console.log(resStatus);
  //     let color = ''
  //         (resStatus) ? color = 'lightgreen' : color = 'red'
  //     setStatusColor({ backgroundColor: color })

  // })

  const fetchOrder = async () => {
    const { data } = await serverClient.get(
      `/order/${authStore.restaurant.id}`
    );
    setData(data.data);
  };

  useEffect(() => {
    if (authStore.restaurant.id) {
      fetchOrder();
    }
  }, []);

  const toggleResStatus = () => {
    if (resStatus) {
      // Alert user wether they want to close their restaurant.
      Alert.alert(
        "Do you want to close your restaurant?",
        "Remaining order will be lost.",
        [
          {
            text: "Close my restaurant",
            onPress: () => {
              setResStatus(false);
              setStatusColor({ backgroundColor: Constants.redColor });
              setStatusText("Close");
            },
          },
          {
            text: "Cancel",
          },
        ]
      );
    } else {
      setResStatus(true);
      setStatusColor({ backgroundColor: "#0ffc03" });
      setStatusText("Open");
    }
  };

  return (
    <SafeView>
      <Container>
        <HeadBox>
          <HeadText>Welcome to your restaurant</HeadText>
        </HeadBox>
        <StatusBox>
          <StatusText>Status</StatusText>
          <StatusToggle onPress={toggleResStatus} style={statusColor}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {statusText}
            </Text>
          </StatusToggle>
        </StatusBox>
        <OrderBox>
          <OrderHeader>
            <OrderHeaderText>Order List</OrderHeaderText>
          </OrderHeader>
          <DynamicRefreshView onRefreshAction={fetchOrder}>
            {data.map((d, i) => (
              <OrderCard key={i} orderData={d} />
            ))}
          </DynamicRefreshView>
        </OrderBox>
      </Container>
    </SafeView>
  );
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(Home);
