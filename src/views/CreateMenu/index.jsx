import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native";
import withSafeArea from "../../hocs/withSafeView";
import dismissKeyBoard from "../../hocs/dismissKeyboard";
import ImgPicker from "../../components/restaurant/ImgPicker";
import AdditionalCard from "../../components/createmenu/AdditionalCard";
import Constants from "../../utils/constants";

import { observer, inject } from "mobx-react";
import { compose } from "recompose";

import { serverClient } from "../../api";
import { PropTypes } from "mobx-react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Container,
  KAVContent,
  Content,
  ImgArea,
  TopPart,
  InfoBox,
  InfoTab,
  HeadWrap,
  HeadText,
  InputWrap,
  InputBox,
  BottomPart,
  BottomHead,
  BottomHeadText,
  TouchableIcon,
  Instruction,
  InstructionWrap,
  CreateBtn,
  CreateText,
  BottomView,
  SafeView,
} from "./styled";

const CreateMenu = ({ navigation, spinnerStore, authStore }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [additionalPending, setAdditionalPending] = useState(false);
  const [options, setOptions] = useState([]);

  const createMenu = () => {
    // TODO: use API
    console.log(options);
    spinnerStore.open();
    //   serverClient.post(`/restaurants/${authStore.restaurant.id}/menus`, {
    //     restaurantId: authStore.restaurant.id,
    //     name,
    //     price,
    //     description: des,
    //     status: 0,
    //     imgURL: "",
    //     question,
    //   });
    spinnerStore.close();
  };

  const cancelAdditional = (index) => {
    console.log(index);
    let newoptions = [
      ...options.slice(0, index),
      ...options.slice(index + 1, options.length),
    ];
    console.log(newoptions);

    setOptions(newoptions);
    setAdditionalPending(false);
  };

  const addOption = () => {
    if (!additionalPending) {
      setOptions([...options, { question: "", type: null, choices: [] }]);
      setAdditionalPending(true);
    }
  };

  const editOption = (index, option) => {
    let newoptions = [
      ...options.slice(0, index),
      option,
      ...options.slice(index + 1, options.length),
    ];
    setOptions(newoptions);
  };

  const showInstruction = () => {
    return options.length > 0 ? (
      <></>
    ) : (
      <InstructionWrap>
        <Instruction>"You can add some option for your dish here"</Instruction>
      </InstructionWrap>
    );
  };

  return (
    <SafeView>
      <Container>
        <KAVContent
          behavior={Platform.Os == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Content>
            <TopPart>
              <ImgArea>
                <ImgPicker storagePath={""} />
              </ImgArea>
              <InfoBox>
                <InfoTab>
                  <HeadWrap>
                    <HeadText>Name</HeadText>
                  </HeadWrap>
                  <InputWrap>
                    <InputBox
                      onChangeText={(text) => {
                        setName(text);
                      }}
                      placeholder={"Name this dish"}
                      maxLength={60}
                      multiline={true}
                      value={name}
                    />
                  </InputWrap>
                </InfoTab>
                <InfoTab>
                  <HeadWrap>
                    <HeadText>Description</HeadText>
                  </HeadWrap>
                  <InputWrap>
                    <InputBox
                      onChangeText={(text) => {
                        setDes(text);
                      }}
                      placeholder={"Add in some description"}
                      maxLength={100}
                      multiline={true}
                      value={des}
                    />
                  </InputWrap>
                </InfoTab>
                <InfoTab>
                  <HeadWrap>
                    <HeadText>Price</HeadText>
                  </HeadWrap>
                  <InputWrap>
                    <InputBox
                      onChangeText={(text) => {
                        setPrice(text);
                      }}
                      placeholder={"0.00"}
                      keyboardType={"numeric"}
                      value={price}
                    />
                  </InputWrap>
                </InfoTab>
              </InfoBox>
            </TopPart>
            <BottomPart>
              <BottomHead>
                <BottomHeadText>Additional</BottomHeadText>
                <TouchableIcon onPress={addOption}>
                  <FontAwesome
                    style={{ paddingRight: 10 }}
                    color={Constants.strongColor}
                    type="FontAwesome"
                    name="plus-square"
                    size={25}
                  />
                </TouchableIcon>
              </BottomHead>
              {showInstruction()}
              {options.map((item, index) => (
                <AdditionalCard
                  key={index}
                  item={item}
                  index={index}
                  cancelAdditional={cancelAdditional}
                  setAdditionalPending={setAdditionalPending}
                  editOption={editOption}
                />
              ))}
            </BottomPart>
          </Content>
        </KAVContent>
      </Container>
      <BottomView>
        <CreateBtn onPress={createMenu}>
          <CreateText>Done</CreateText>
        </CreateBtn>
      </BottomView>
    </SafeView>
  );
};

CreateMenu.propTypes = {
  navigation: PropTypes.object,
};

// CreateMenu.navigationOptions = props => {
//     return {
//         tabBar: ({ }) => ({
//             visible: false
//         })
//     }
// }

export default compose(
  inject(({ rootStore }) => ({
    spinnerStore: rootStore.spinnerStore,
    authStore: rootStore.authStore,
  })),
  observer
)(CreateMenu);
