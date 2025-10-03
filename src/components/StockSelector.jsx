import React from 'react';

const stocks = [
  { value: '^GSPC', label: 'S&P 500 (^GSPC)' },
  { value: 'AAPL', label: 'Apple Inc. (AAPL)' },
  { value: 'GOOGL', label: 'Alphabet Inc. (GOOGL)' },
  { value: 'MSFT', label: 'Microsoft Corp. (MSFT)' },
  { value: 'AMZN', label: 'Amazon.com Inc. (AMZN)' },
  { value: 'TSLA', label: 'Tesla Inc. (TSLA)' },
  { value: 'NVDA', label: 'NVIDIA Corp. (NVDA)' },
  { value: 'META', label: 'Meta Platforms Inc. (META)' }
];

const timeRanges = [
  { value: '1mo', label: '1 Month' },
  { value: '3mo', label: '3 Months' },
  { value: '6mo', label: '6 Months' },
  { value: '1y', label: '1 Year' },
  { value: '5y', label: '5 Years' },
  { value: 'max', label: 'All Time' }
];

function StockSelector({ selectedStock, onStockChange, timeRange, onTimeRangeChange }) {
  return (
    <div className="stock-selector">
      <div className="selector-group">
        <label htmlFor="stock-select">Select Stock/Index</label>
        <select
          id="stock-select"
          value={selectedStock}
          onChange={(e) => onStockChange(e.target.value)}
          className="select-input"
        >
          {stocks.map((stock) => (
            <option key={stock.value} value={stock.value}>
              {stock.label}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-group">
        <label htmlFor="time-range-select">Time Range</label>
        <select
          id="time-range-select"
          value={timeRange}
          onChange={(e) => onTimeRangeChange(e.target.value)}
          className="select-input"
        >
          {timeRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StockSelector;
