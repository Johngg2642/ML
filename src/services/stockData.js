export const fetchStockData = async (symbol, timeRange) => {
  const mockData = generateMockData(symbol, timeRange);
  return mockData;
};

const generateMockData = (symbol, timeRange) => {
  const days = getNumberOfDays(timeRange);
  const data = [];
  const basePrice = getBasePrice(symbol);
  let currentPrice = basePrice;

  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const volatility = 0.02;
    const trend = 0.0002;
    const change = (Math.random() - 0.48) * volatility + trend;

    currentPrice = currentPrice * (1 + change);

    const high = currentPrice * (1 + Math.random() * 0.01);
    const low = currentPrice * (1 - Math.random() * 0.01);
    const open = currentPrice * (1 + (Math.random() - 0.5) * 0.005);

    const prediction = Math.random() > 0.5 ? 1 : 0;

    data.push({
      date: date.toISOString().split('T')[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(currentPrice.toFixed(2)),
      volume: Math.floor(Math.random() * 100000000) + 50000000,
      prediction: prediction
    });
  }

  return data;
};

const getNumberOfDays = (timeRange) => {
  switch (timeRange) {
    case '1mo':
      return 30;
    case '3mo':
      return 90;
    case '6mo':
      return 180;
    case '1y':
      return 365;
    case '5y':
      return 1825;
    case 'max':
      return 3650;
    default:
      return 365;
  }
};

const getBasePrice = (symbol) => {
  const prices = {
    '^GSPC': 5800,
    'AAPL': 180,
    'GOOGL': 140,
    'MSFT': 380,
    'AMZN': 170,
    'TSLA': 250,
    'NVDA': 500,
    'META': 450
  };
  return prices[symbol] || 100;
};
