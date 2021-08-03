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
  {
    name: "app2", // app name registered
    entry: "//localhost:8002",
    container: "#mf-container",
    loader,
    activeRule: "/app2",
  },
]);
prefetchApps([
  { name: "app1", entry: "//locahost:7101" },
  { name: "app2", entry: "//locahost:7102" },
]);
start();
setDefaultMountApp("/app2");
addGlobalUncaughtErrorHandler((event) => console.log(event));
