const { atom, selector } = require("recoil");

const responsesState = atom({
  key: "responses",
  default: {
    context: {
      industry: "",
      niche: "",
      product: "",
      benefits: "",
    },
    canvas: {
      partners: "",
      activities: "",
      value: "",
      resources: "",
      relationships: "",
      segments: "",
      channels: "",
      cost: "",
      revenue: "",
    },
    identity: {
      names: "",
      slogan: "",
      vision: "",
      pitch: "",
    },
    swot: {
      strengths: "",
      opportunities: "",
      weaknesses: "",
      threats: "",
    },
  },
});

const canvasData = atom({
  key: "canvas",
  default: {
    partners: "",
    activities: "",
    value: "",
    resources: "",
    relationships: "",
    segments: "",
    channels: "",
    cost: "",
    revenue: "",
  },
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
