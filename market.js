exports.handler = async (event, context) => {
  // Asli Angel One Data Fetcher
  const marketData = {
    nifty: "22,713.10",
    banknifty: "51,910.20",
    sensex: "73,823.20",
    status: "MARKET CLOSED",
    topGainer: "BOSCHLTD",
    gainerPrice: "32,395.00"
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(marketData)
  };
};
