import React, { useState, useEffect } from "react";
import Constants from "../../utils/constants";
import { Width, Height } from "../../utils/utils";
import styled from "styled-components";
import QRCode from "react-native-qrcode-svg";
import { serverClient } from "../../api";
import { firebaseApp } from "../../utils/firebase";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

const Modal = styled.Modal``;
const Container = styled.View`
  padding-top: ${Height * 0.15 + "px"};
  align-items: center;
`;

const Content = styled.View`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${Constants.weakColor};
    width: ${Width * 0.85 + "px"};
    height: ${Height * 0.63 + "px"};
    justify-content: space-between
    align-items: center;
`;
const Head = styled.View`
    width: 95%;
    height: 15%;
    margin: 2.5%;
    background-color: ${Constants.veryWeakColor}
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    align-items: center;
`;

const Title = styled.Text`
  margin: 6%;
  font-weight: bold;
  font-size: 20px;
  color: ${Constants.strongColor};
`;
const FormBox = styled.View`
  flex-direction: row;
  align-items: center;
  height: 8%;
`;
const FormHead = styled.Text``;

const Form = styled.TextInput`
  margin-left: 10%;
  border-radius: 2px;
  background-color: white;
  width: 20%;
  height: 100%;
  text-align: right;
`;
const BtnGroup = styled.View`
  flex-direction: row;
  height: 12%;
`;

const Apply = styled.TouchableOpacity`
  width: 50%;
  background-color: lightgreen;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const Cancel = styled.TouchableOpacity`
  width: 50%;
  background-color: ${Constants.redColor};
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-size: 20px;
  color: white;
`;
const Sqr = styled.View`
  border-width: 1.1px;
  border-color: lightgrey;
  background-color: white;
  width: 150px;
  height: 150px;
`;

const NewTable = ({ closeModal, visible, resId }) => {
  const [tableNum, setTableNum] = useState();
  const [qrRef, setQrRef] = useState();

  const getQrValue = () => {
    return JSON.stringify({
      id: resId,
      table: tableNum,
    });
  };

  const renderQR = () => {
    return tableNum ? (
      <QRCode
        size={150}
        value={getQrValue()}
        getRef={(c) => {
          setQrRef(c);
        }}
      />
    ) : (
      <Sqr />
    );
  };

  const upLoad = async () => {
    try {
      let ref = firebaseApp
        .storage()
        .ref()
        .child("/images/qrcodes/" + resId + "/" + tableNum + ".png");
      let response = await fetch(FileSystem.cacheDirectory + "temp.png");
      let blob = await response.blob();
      let snapshot = await ref.put(blob);
      return snapshot.ref.getDownloadURL();
    } catch (e) {
      console.log(e);
    }
  };

  const downLoad = async () => {
    qrRef.toDataURL(async (data) => {
      try {
        FileSystem.writeAsStringAsync(
          FileSystem.cacheDirectory + "temp.png",
          data,
          { encoding: FileSystem.EncodingType.Base64 }
        ).then(() => {
          //CameraRoll.saveToCameraRoll(FileSystem.cacheDirectory + "temp.png", 'photo')
          MediaLibrary.saveToLibraryAsync(
            FileSystem.cacheDirectory + "temp.png"
          );
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const applyNewTable = () => {
    if (qrRef) {
      downLoad().then(() => {
        upLoad().then((snapshot) => {
          // console.log(snapshot);
          serverClient.post(`/qrcode/${resId}`, {
            tableno: tableNum,
            imgUrl: snapshot,
          });
        });
        closeModal();
      });
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Content>
            <Head>
              <Title>New Table</Title>
            </Head>
            <FormBox>
              <FormHead>Table number</FormHead>
              <Form
                keyboardType={"numeric"}
                placeholder="0"
                value={tableNum}
                onChangeText={(text) => {
                  setTableNum(text);
                }}
              />
            </FormBox>
            {renderQR()}
            <BtnGroup>
              <Cancel onPress={closeModal}>
                <BtnText>Cancel</BtnText>
              </Cancel>
              <Apply onPress={applyNewTable}>
                <BtnText>Done</BtnText>
              </Apply>
            </BtnGroup>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default NewTable;
