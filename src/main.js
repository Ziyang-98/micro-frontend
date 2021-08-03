import { registerMicroApps, start } from "qiankun";
import microApps from "./micro-app";
import { initGlobalState } from "qiankun";
//Initialize state
const initialState = {
  User: {}, // user information
};
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
  //State: state after change; prev state before change
  console.log(state, prev);
});
actions.setGlobalState(state);

registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});

start();
