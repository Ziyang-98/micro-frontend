import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  prefetchApps,
  addGlobalUncaughtErrorHandler,
} from "qiankun";
import render from "./render/ReactRender";

render({ loading: true });
const loader = (loading) => render({ loading });
registerMicroApps([
  {
    name: "app1", // app name registered
    entry: "//localhost:8001",
    container: "#mf-container",
    loader,
    activeRule: "/app1",
  },
]);
prefetchApps([{ name: "app1", entry: "//locahost:7101" }]);
start();
setDefaultMountApp("/app1");
addGlobalUncaughtErrorHandler((event) => console.log(event));
