import React, { useState, useEffect } from "react";
import Logout from "../../components/options/Logout";
import { Container, Text, Box } from "./styled";

const Options = ({ navigation }) => {
  const handleNavigateToIncome = () => {
    navigation.navigate("Income");
  };

  return (
    <Container>
      <Box onPress={handleNavigateToIncome}>
        <Text>Income</Text>
      </Box>
      <Logout navigation={navigation} />
    </Container>
  );
};

export default Options;
