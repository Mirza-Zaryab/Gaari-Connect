import { lazy } from "react";
import ListStepper from "./ListStepper";
import { Provider } from "react-redux";
import store from "./store/index";

const ListStepperConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: "/ListStepper",
      component: lazy(() => import("./ListStepper")),
    },
  ],
};

export default ListStepperConfig;
