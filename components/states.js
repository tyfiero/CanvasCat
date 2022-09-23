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
const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { responsesState, charState, sendAllState, sendAllTypeState };
