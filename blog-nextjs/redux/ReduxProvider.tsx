import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
