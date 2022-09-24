const { atom, selector } = require("recoil");

const responsesState = atom({
  key: "canvasSections",
  default: [],
});

const sendAllState = atom({
  key: "sendAll",
  default: false,
});
const sendAllTypeState = atom({
  key: "sendAllType",
  default: "canvas",
});

export { responsesState, sendAllState, sendAllTypeState };
