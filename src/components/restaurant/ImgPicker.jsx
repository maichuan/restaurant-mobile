import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { firebaseApp } from "../../utils/firebase";
import { FontAwesome } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { serverClient } from "../../api";

const EditImg = styled.TouchableOpacity`
  margin: 20px;
`;
const Img = styled.ImageBackground`
  border-radius: 20px;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
`;

const ImgPicker = ({ imgUrl, onImgUrlUpdate, storagePath }) => {
  const [imgStatus, setImgStatus] = useState(false);

  useEffect(() => {
    if (imgUrl && imgUrl != "") setImgStatus(true);
  }, [imgUrl]);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        let newImgURL = await upLoad(result.uri);
        // console.log(newImgURL);
        setImgStatus(true);
        onImgUrlUpdate(newImgURL);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const upLoad = async (img) => {
    let ref = firebaseApp.storage().ref().child(storagePath);
    let response = await fetch(img);
    let blob = await response.blob();
    let snapshot = await ref.put(blob);
    return snapshot.ref.getDownloadURL();
  };

  const onPress = async () => {
    getPermissionAsync().then(() => {
      pickImage();
    });
  };

  return (
    <EditImg onPress={onPress}>
      <Img
        imageStyle={{ resizeMode: "stretch", borderRadius: 20 }}
        source={
          imgUrl ? { uri: imgUrl } : require("../../../assets/no_image.png")
        }
      >
        {!imgStatus && (
          <FontAwesome type="FontAwesome" name="image" color="grey" size={35} />
        )}
      </Img>
    </EditImg>
  );
};

export default ImgPicker;
