import styled from "styled-components";
import Constants from "../../utils/constants";
import { Dimensions } from "react-native";

const Height = Dimensions.get("window").height;

const Width = Dimensions.get("window").width;

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Constants.veryWeakColor};
`;
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Constants.veryWeakColor};
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
export const KAVContent = styled.KeyboardAvoidingView``;
export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const TopPart = styled.View`
  justify-content: center;
`;
export const InfoBox = styled.View`
  justify-content: center;
`;
export const InfoTab = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
  height: 30px;
`;
export const HeadWrap = styled.View`
  background-color: lightgrey;
  justify-content: center;
  width: 110px;
  height: 35px;
  border-right-width: 1.5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const HeadText = styled.Text`
  color: white;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
`;
export const InputWrap = styled.View`
  margin-left: 10px;
  width: 60%;
  min-height: 35px;
  height: auto;
  border-width: 1.2px;
  border-radius: 3px;
  justify-content: center;
  border-color: ${Constants.tabColor};
`;

export const InputBox = styled.TextInput`
  padding-right: 10px;
  width: 100%;
  /* max-width: 175px; */
  max-height: 50px;
  text-align: right;
  text-align: right;
`;
export const ImgArea = styled.View`
  align-items: center;
`;

export const EditImg = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 20px;
  width: 120px;
  height: 120px;
  background-color: lightgrey;
  resize-mode: stretch;
`;
export const BottomPart = styled.View`
  margin: 15px;
  width: 95%;
  max-width: 350px;
  min-height: 220px;
  align-items: center;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: lightgrey;
  flex-direction: column;
`;
export const BottomHead = styled.View`
    width: 97%;
    height: 40px;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-color: ${Constants.tabColor}
    border-bottom-width: 1.3px;
    background-color: ${Constants.weakColor}
`;
export const BottomHeadText = styled.Text`
  align-self: center;
  padding-left: 15px;
  font-size: 20px;
  font-weight: 500;
  color: ${Constants.strongColor};
`;
export const TouchableIcon = styled.TouchableOpacity`
  align-self: center;
`;
export const InstructionWrap = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Instruction = styled.Text`
  padding-top: 20px;
  margin: 30px;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  color: lightgrey;
`;
export const BottomView = styled.View`
  justify-content: center;
  align-items: center;
`;
export const CreateBtn = styled.TouchableOpacity`
  padding: 10px;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${Constants.tabColor};
`;
export const CreateText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: white;
`;
