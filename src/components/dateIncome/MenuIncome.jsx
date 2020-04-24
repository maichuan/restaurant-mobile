import React from "react";
import styled from "styled-components";
import Constant from "../../utils/constants";

import { Width } from "../../utils/utils";

const Container = styled.View`
  background-color: ${Constant.weakColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
  width: 100%;
  border-width: 1px;
  border-top-width: ${({ first }) => (first ? "1px" : "0")};
  border-color: ${Constant.strongColor};
`;
const Text = styled.Text`
  color: ${Constant.strongColor};
  font-size: 20px;
`;
const InlineView = styled.View`
  display: flex;
  flex-direction: row;
`;

const MenuIncome = ({ menu, first }) => {
  return (
    <Container first={first}>
      <Text>{menu.name}</Text>
      <Text>{menu.price}</Text>
      <Text>x{menu.quantity}</Text>
      <Text>{menu.totalPrice}.-</Text>
    </Container>
  );
};

export default MenuIncome;
