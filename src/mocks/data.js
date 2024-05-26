import { generateUniqueID } from "../utils";

export const trades = [
  {
    id: generateUniqueID(),
    time: "00:00 AM",
    source: "wind",
    quantity: 50,
  },
  {
    id: generateUniqueID(),
    time: "01:00 AM",
    source: "solar",
    quantity: 100,
  },
  {
    id: generateUniqueID(),
    time: "02:00 AM",
    source: "solar",
    quantity: 75,
  },
  {
    id: generateUniqueID(),
    time: "08:00 AM",
    source: "wind",
    quantity: 200,
  },
  {
    id: generateUniqueID(),
    time: "10:00 AM",
    source: "wind",
    quantity: 80,
  },
];
