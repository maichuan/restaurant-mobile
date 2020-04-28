import styled from "styled-components";
import Constant from "../../utils/constants";
import { Width } from "../../utils/utils";

export const Container = styled.View`
  flex-direction: column;
  background-color: ${Constant.veryWeakColor};
  height: 100%;
  justify-content: center;
`;
export const Box = styled.TouchableOpacity`
  background-color: ${Constant.tabColor};
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${Width / 3 + "px"};
  height: ${Width / 3 + "px"};
  border-radius: 100px;
  margin: 10px;
`;
export const QR = styled.TouchableOpacity`
  background-color: lightgreen;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${Width / 3 + "px"};
  height: ${Width / 3 + "px"};
  border-radius: 100px;
  margin: 10px;
`;
export const Text = styled.Text`
  color: ${Constant.strongColor};
  font-size: 28px;
`;
