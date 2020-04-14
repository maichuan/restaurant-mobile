import styled from "styled-components";
import Constants from "../../utils/constants";
import { Dimensions } from "react-native";

const Height = Dimensions.get("window").height;

const Width = Dimensions.get("window").width;

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Constants.tabColor};
`;
export const Container = styled.View`
  align-items: center;
  height: 100%;
  background-color: ${Constants.veryWeakColor};
`;
export const HeadBox = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${Constants.tabColor};
  flex-direction: column;
  justify-content: center;
`;
export const HeadText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: white;
  align-self: center;
  color: ${Constants.strongColor};
  /* padding-top: 30px; */
`;
export const StatusBox = styled.View`
  border-bottom-width: 1.3px;
  border-color: ${Constants.strongColor};
  width: ${Width + "px"};
  padding: ${Width > 400 ? "0 25px" : "0 10px"};
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const StatusText = styled.Text`
  font-size: 24px;
  color: ${Constants.strongColor};
  font-weight: 500;
`;
export const StatusToggle = styled.TouchableOpacity`
  border-radius: 3px;
  width: 150px;
  height: 35px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
export const OrderHeader = styled.View`
  background-color: ${Constants.weakColor};
  height: 40px;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-color: ${Constants.tabColor};
  border-bottom-width: 1.5px;
`;
export const OrderHeaderText = styled.Text`
  font-size: ${({ size }) => (size ? size : "15px")};
  font-weight: bold;
  color: ${Constants.strongColor};
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const OrderBox = styled.View`
  width: 95%;
  min-width: 300px;
  /* height: ${Height / 1.6 + "px"}; */
  min-height: 300px;
  max-height: 500px;
  border-width: 1.3px;
  border-color: lightgrey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 20px;
`;
export const OrderView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${Width + "px"};
  margin-top: 10px;
`;
export const ProcessView = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const OrderContent = styled.ScrollView``;
