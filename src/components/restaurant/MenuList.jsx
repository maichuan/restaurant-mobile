import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Constants from "../../utils/constants";
import { FontAwesome } from "@expo/vector-icons";
import MenuCard from './MenuCard'


const Container = styled.View`
  max-width: 95%;
  margin-top: 20px;
  width: 350px;
  min-height: 200px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: lightgrey;
`;
const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 45px;
  background-color: ${Constants.weakColor};
  border-color: ${Constants.tabColor};
  border-bottom-width: 1.5px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const HeadText = styled.Text`
  padding-left: 15px;
  font-size: 20px;
  font-weight: 500;
  color: ${Constants.strongColor};
`;
const InfoWrap = styled.View`
  justify-content: center;
  align-self: center;
  padding-top: 40px;
`;

const InfoText = styled.Text`
  font-style: italic;
  font-size: 20px;
  color: lightgrey;
  text-align: center;
`;

const AddBtn = styled.TouchableOpacity``;
const Content = styled.View``;

const MenuList = ({ menus, navigation }) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setMenuList(menus)
  }, [menus])

  const toCreateMenu = () => {
    navigation.navigate("CreateMenu");
  };

  const showInfo = () => {
    return menuList.length > 0 ? (
      menuList.map((item, index) => {
        return <MenuCard key={index} data={item} />
      })
    ) : (
        <InfoWrap>
          <InfoText>"Your menu is still empty"</InfoText>
        </InfoWrap>
      );
  };

  return (
    <Container>
      <Head>
        <HeadText>Menu</HeadText>
        <AddBtn onPress={toCreateMenu}>
          <FontAwesome
            style={{ paddingRight: 10 }}
            color={Constants.strongColor}
            type="FontAwesome"
            name="plus-square"
            size={25}
          />
        </AddBtn>
      </Head>
      {showInfo()}
    </Container>
  );
};

export default MenuList;
