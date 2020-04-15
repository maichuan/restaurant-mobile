import styled from "styled-components";
import Constant from "../../utils/constants";

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Constant.veryWeakColor};
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;
export const Head = styled.Text`
  font-size: 24px;
  margin: 15px;
  margin-bottom: 100px;
  color: ${Constant.strongColor};
`;
export const FormBlock = styled.View``;
export const Input = styled.TextInput`
  height: 40px;
  min-width: 300px;
  border-color: gray;
  border-width: 1px;
  margin: 10px 0px;
  padding: 0px 5px;
  border-radius: 5px;
  border-color: ${Constant.tabColor};
`;
export const RegButton = styled.TouchableOpacity`
  min-width: 300px;
  background-color: ${Constant.tabColor};
  border: 2px solid ${Constant.tabColor};
  border-radius: 5px;
  margin-top: 10px;
`;
export const RegText = styled.Text`
  color: white;
  margin: 10px;
  text-align: center;
`;
