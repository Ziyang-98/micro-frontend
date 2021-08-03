const microApps = [
  {
    name: "app1",
    entry: "//localhost:8001/",
    activeRule: "/app1",
    Container: "#mf-container", // div mounted by sub application
    props: {
      Routerbase: "/app1", // issue the route to the sub application, and the sub application defines the route in the Qiankun environment according to the value
    },
  },
  {
    name: "app2",
    entry: "//localhost:9001/",
    activeRule: "/app2",
    Container: "#mf-container", // div mounted by sub application
    props: {
      routerBase: "/app2",
    },
  },
];

export default microApps;
