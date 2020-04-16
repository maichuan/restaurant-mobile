import styled from "styled-components";
import Constants from "../../utils/constants";

export const Container = styled.ScrollView`
  background-color: ${Constants.veryWeakColor};
`;
export const Content = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const InfoBox = styled.View`
  width: 95%;
  max-width: 350px;
  border-color: ${Constants.strongColor};
  border-width: 1.2px;
  border-radius: 10px;
`;
export const EditTab = styled.View`
  min-height: 30px;
  flex-direction: row;
  justify-content: space-between;
  border-color: ${Constants.strongColor};
  border-bottom-width: 1px;
  margin: 10px;
`;
export const EditLocal = styled.TouchableOpacity`
  flex-direction: row;
  width: auto;
`;
export const EditHead = styled.Text`
  color: ${Constants.strongColor};
`;
export const EditContext = styled.View`
  flex-direction: row;
`;
export const EditText = styled.TextInput`
  max-width: 230px;
  width: 130px;
  text-align: right;
  color: ${Constants.strongColor};
`;
export const UpdateButton = styled.TouchableOpacity`
  width: 50%;
  padding: 10px;
  margin: 20px 0 0;
  /* border-width: 1px; */
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${Constants.tabColor};
`;

export const UpdateText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${Constants.strongColor};
`;
