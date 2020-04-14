import { Dimensions } from "react-native";

export const Height = Dimensions.get("window").height;

export const Width = Dimensions.get("window").width;

export const generateListOfOrderDetails = (details) => {
  return details.map((detail) => {
    return (
      "-" +
      detail.question +
      ": " +
      (Array.isArray(detail.choices) ? detail.choices.join() : detail.choices)
    );
  });
};
