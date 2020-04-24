import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Constant from "../../utils/constants";

import { Width } from "../../utils/utils";

const Container = styled.TouchableOpacity`
  background-color: ${Constant.weakColor};
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  padding: 20px 10px;
  width: 100%;
  /* height: ${Width / 3}; */
  border-width: 1px;
  border-top-width: ${({ first }) => (first ? "1px" : "0")};
  border-color: ${Constant.strongColor};
`;
const Text = styled.Text`
  color: ${Constant.strongColor};
  font-size: 25px;
`;
const RightIcon = styled(Ionicons)`
  color: ${Constant.strongColor};
  padding: 0 10px;
  font-size: 25px;
`;
const InlineView = styled.View`
  display: flex;
  flex-direction: row;
`;

const IncomeItem = ({ navigation, data, first }) => {
  const handleNavigateToDateIncome = () => {
    navigation.navigate("DateIncome", { date: data.date });
  };
  return (
    <Container
      activeOpacity={0.8}
      first={first}
      onPress={handleNavigateToDateIncome}
    >
      <Text>{data.date}</Text>
      <InlineView>
        <Text>{data.income + ".-"}</Text>
        <RightIcon name="ios-arrow-forward" type="Ionicons" />
      </InlineView>
    </Container>
  );
};

export default IncomeItem;
