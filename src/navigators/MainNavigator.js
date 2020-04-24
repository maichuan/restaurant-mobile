import React from "react";

import Home from "../views/Home";
import Options from "../views/Options";
import Restaurant from "../views/Restaurant";
import CreateMenu from "../views/CreateMenu";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  TransitionPresets,
  createStackNavigator,
} from "react-navigation-stack";
import Constants from "../utils/constants";
import TabBarIcon from "../components/common/TabBarIcon";
import Income from "../views/Income";
import DateIncome from "../views/DateIncome";

const options = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent",
    },
  },
};

const optionsHeader = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Constants.tabColor,
    },
    headerTintColor: Constants.strongColor,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      color: Constants.strongColor,
    },
    headerBackTitle: " ",
  },
};

const MainTab = createStackNavigator(
  {
    Home,
  },
  options
);

MainTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
        focused={focused}
        tintColor={tintColor}
        type="FontAwesome"
        name="home"
      />
    ),
  };
};

const OptionsTab = createStackNavigator(
  {
    Options: Options,
    Income,
    DateIncome,
  },
  optionsHeader
);

OptionsTab.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Options",
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon tintColor={tintColor} type="FontAwesome" name="gears" />
    ),
  };
};

const RestaurantTab = createStackNavigator(
  {
    Restaurant: Restaurant,
    CreateMenu: CreateMenu,
  },
  optionsHeader
);

RestaurantTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: "Restaurant",
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon tintColor={tintColor} type="FontAwesome" name="bars" />
    ),
  };
};

const TabNav = createBottomTabNavigator(
  {
    MainTab,
    RestaurantTab,
    OptionsTab,
  },
  {
    initialRouteName: "MainTab",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Constants.strongColor,
      inactiveTintColor: Constants.weakColor,
      style: {
        backgroundColor: Constants.tabColor,
        height: 60,
      },
    },
  }
);

export default createStackNavigator(
  {
    TabNav,
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  }
);
