import React, { useState, useEffect } from "react";
import Logout from "../../components/options/Logout";
import { Container, Text, Box, QR } from "./styled";

const Options = ({ navigation }) => {
  const handleNavigateToIncome = () => {
    navigation.navigate("Income");
  };

  const navigateQRPage = () => {
    navigation.navigate("QR")
  }

  return (
    <Container>
      <QR onPress={navigateQRPage}>
        <Text>QR</Text>
      </QR>
      <Box onPress={handleNavigateToIncome}>
        <Text>Income</Text>
      </Box>
      <Logout navigation={navigation} />
    </Container>
  );
};

export default Options;
