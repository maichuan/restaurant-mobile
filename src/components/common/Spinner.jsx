import React from "react";
import styled from "styled-components";
import { BallIndicator } from "react-native-indicators";

import { Dimensions } from "react-native";

const Height = Dimensions.get("window").height;

const Width = Dimensions.get("window").width;

const Container = styled.View`
  width: ${Width + "px"};
  height: ${Height + "px"};
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.3;
  z-index: 999;
`;

const Spinner = () => {
  return (
    <Container>
      <BallIndicator color="white" />
    </Container>
  );
};

export default Spinner;
