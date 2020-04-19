import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Constant from "../../utils/constants";
import { serverClient } from "../../api";

const Card = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${Constant.strongColor};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
const MenuBox = styled.View``;

const MenuText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const DesText = styled.Text``;

const QTYbox = styled.View``;

const QTYnum = styled.Text`
  font-size: 42px;
  font-weight: bold;
`;

const OrderCard = ({ orderData, onPickToCook, restaurantId }) => {
  const fetchOrder = async () => {
    const res = await serverClient.put(`/order/${restaurantId}`, {
      confirmOrderId: orderData.id,
    });
    console.log(res);
    onPickToCook(orderData);
    // if (status === 200) {
    // }
  };

  const handleClicked = () => {
    Alert.alert("Pick this order to cooking?", "", [
      {
        text: "Yes",
        onPress: async () => {
          await fetchOrder();
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
      <MenuBox>
        <MenuText>{orderData.name}</MenuText>
        <DesText>{orderData.des}</DesText>
      </MenuBox>
      <QTYnum>{orderData.quantity}</QTYnum>
    </Card>
  );
};

OrderCard.propTypes = {
  orderData: PropTypes.object,
};

OrderCard.defaultProps = {
  orderData: {
    name: "คุณก้อง",
    des: "เบอเกอร์ท่านก้อง",
    quantity: 1,
  },
};

export default OrderCard;
