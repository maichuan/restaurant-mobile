import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import Constant from "../../utils/constants";
import { generateListOfOrderDetails } from "../../utils/utils";
import { Width } from "../../utils/utils";
import constants from "../../utils/constants";
import { serverClient } from "../../api";

const Card = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${Constant.strongColor};
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 10px;
`;
const MenuBox = styled.View`
  width: ${Width / 1.5 + "px"};
  padding: 0 10px;
`;
const MenuText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Constant.strongColor};
  flex-wrap: wrap;
`;
const OrderId = styled.Text`
  color: ${Constant.strongColor};
  font-weight: 300;
  font-size: 12px;
  padding: 10px;
`;
const DesText = styled.Text`
  color: ${Constant.strongColor};
  font-size: 15px;
`;
const QTYbox = styled.View`
  width: ${Width / 8 + "px"};
  height: ${Width / 8 + "px"};
  border-width: 1px;
  border-color: ${constants.strongColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QTYnum = styled.Text`
  color: ${Constant.strongColor};
  font-size: 42px;
  font-weight: bold;
`;
const CompleteButton = styled.View`
  background-color: ${constants.tabColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: ${Width / 6 + "px"};
  height: ${Width / 6 + "px"};
`;
const CompleteText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${constants.strongColor};
`;

const CurrentOrderCard = ({
  orderData,
  restaurantId,
  spinnerStore,
  onConfirm,
}) => {
  const fetchOrder = async () => {
    spinnerStore.open();
    await serverClient.post(`/order/${restaurantId}/complete`, {
      confirmOrderId: orderData.id,
    });
    spinnerStore.close();
  };

  const handleClicked = () => {
    Alert.alert("Finish this order?", "", [
      {
        text: "Done",
        onPress: async () => {
          await fetchOrder();
          onConfirm(orderData.id);
        },
        style: "cancel",
      },
      {
        text: "Cancel",
      },
    ]);
  };

  return (
    <Card activeOpacity={0.8} onPress={handleClicked}>
      <QTYbox>
        <QTYnum>{orderData.quantity}</QTYnum>
      </QTYbox>
      <MenuBox>
        <MenuText>{orderData.name}</MenuText>
        <OrderId>Order ID:{orderData.id}</OrderId>
        {generateListOfOrderDetails(orderData.details).map((detail, i) => (
          <DesText key={i}>{detail}</DesText>
        ))}
      </MenuBox>
      <CompleteButton>
        <CompleteText>Done</CompleteText>
      </CompleteButton>
    </Card>
  );
};

CurrentOrderCard.propTypes = {
  orderData: PropTypes.object,
};

CurrentOrderCard.defaultProps = {
  orderData: {
    name: "คุณก้อง",
    des: "เบอเกอร์ท่านก้อง",
    quantity: 1,
  },
};

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
  })),
  observer
)(CurrentOrderCard);
