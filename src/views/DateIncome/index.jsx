import React, { useState, useEffect } from "react";
import { Container, Text, Box } from "./styled";
import { mock } from "./mock";
import { serverClient } from "../../api";
import MenuIncome from "../../components/dateIncome/MenuIncome";

const DateIncome = ({ navigation }) => {
  const { date } = navigation.state.params;

  const [data, setData] = useState({ menus: [] });

  const fetchDateIncome = async () => {
    // const { data } = await serverClient.get(
    //   `/summary/${id}/${new Date(date).getTime()}`
    // );
    // setData(data)

    setData(mock);
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

export default DateIncome;
