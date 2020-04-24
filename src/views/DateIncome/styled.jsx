import styled from "styled-components";
import Constant from "../../utils/constants";
import { Width } from "../../utils/utils";

export const Container = styled.View`
  flex-direction: column;
  background-color: ${Constant.veryWeakColor};
  height: 100%;
`;
export const Text = styled.Text`
  color: ${Constant.strongColor};
  font-size: 23px;
`;
