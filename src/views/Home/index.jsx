import React, { useEffect, useState } from "react";
import { Text, Alert } from "react-native";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import Constants from "../../utils/constants";
import { serverClient } from "../../api";
import OrderCard from "../../components/home/OrderCard";
import CurrentOrderCard from "../../components/home/CurrentOrderCard";
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
  OrderView,
  SafeView,
  ProcessView,
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
  const [lastDone, setLast] = useState(0);

  // useEffect(() => {
  //     console.log(resStatus);
  //     let color = ''
  //         (resStatus) ? color = 'lightgreen' : color = 'red'
  //     setStatusColor({ backgroundColor: color })

  // })

  const fetchOrder = async () => {
    spinnerStore.open();
    const { data } = await serverClient.get(
      `/order/${authStore.restaurant.id}`
    );
    setData(data.data);
    spinnerStore.close();
  };

  useEffect(() => {
    if (authStore.restaurant.id) {
      fetchOrder();
    }
  }, []);

  useEffect(() => {
    fetchOrder();
  }, [lastDone]);

  useEffect(() => {
    data.map((d) => console.log(d.id, d.status));
  }, [data]);

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

  const pickToCook = (order) => {
    setData((prev) => [
      ...prev.filter((p) => p !== order),
      { ...order, status: 1 },
    ]);
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
        <DynamicRefreshView onRefreshAction={fetchOrder}>
          <OrderView>
            <ProcessView>
              <OrderHeaderText size="20px">Current order</OrderHeaderText>
              {data
                .filter((d) => d.status == 1)
                .map((d, i) => (
                  <CurrentOrderCard
                    key={i}
                    restaurantId={authStore.restaurant.id}
                    orderData={d}
                    onConfirm={setLast}
                  />
                ))}
            </ProcessView>
            <OrderBox>
              <OrderHeader>
                <OrderHeaderText>Next order</OrderHeaderText>
              </OrderHeader>
              <OrderContent>
                {data
                  .filter((d) => d.status == 0)
                  .map((d, i) => (
                    <OrderCard
                      key={i}
                      restaurantId={authStore.restaurant.id}
                      onPickToCook={pickToCook}
                      orderData={d}
                    />
                  ))}
              </OrderContent>
            </OrderBox>
          </OrderView>
        </DynamicRefreshView>
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
