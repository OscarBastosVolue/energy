export const defaultMorningTimes = [
  "00:00 AM",
  "01:00 AM",
  "02:00 AM",
  "03:00 AM",
  "04:00 AM",
  "05:00 AM",
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
];

export const emptyTradeTemplate = {
  source: "n/a",
  quantity: 0,
  time: "",
};

export function generateUniqueID() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2);

  return timestamp + randomPart;
}
