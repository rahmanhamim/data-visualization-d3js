const rawData = [
  {
    name: "Bitcoin",
    price: 10,
    base: "USD",
    date: "1560507303",
    creator: "Satoshi Nakamoto",
  },
  {
    name: "Bitcoin",
    price: 12,
    base: "USD",
    date: "1592129703",
    creator: "Satoshi Nakamoto",
  },
];

const getPrice = (value) => value * 100;

const getDate = (date) => new Date(date * 100);

const data = rawData.map((d) => ({
  price: getPrice(d.price),
  data: getDate(d.date),
}));
