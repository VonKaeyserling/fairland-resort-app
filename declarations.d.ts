declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare global {
  import { RootStackParamList } from "./src/navigation/types";

  type ValueOf<T> = T[keyof T];

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
