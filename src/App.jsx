import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Activity } from 'lucide-react';
import BrokerageLinks from './components/BrokerageLinks';
import StockSelector from './components/StockSelector';
import StatsCards from './components/StatsCards';
import { fetchStockData } from './services/stockData';
import './App.css';

function App() {
  const [stockData, setStockData] = useState([]);
  const [selectedStock, setSelectedStock] = useState('^GSPC');
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('1y');
  const [stats, setStats] = useState({
    currentPrice: 0,
    change: 0,
    changePercent: 0,
    prediction: null,
  });

  useEffect(() => {
    loadStockData();
  }, [selectedStock, timeRange]);

  const loadStockData = async () => {
    setLoading(true);
    try {
      const data = await fetchStockData(selectedStock, timeRange);
      setStockData(data);

      if (data.length > 0) {
        const latest = data[data.length - 1];
        const previous = data[data.length - 2];
        const change = latest.close - previous.close;
        const changePercent = (change / previous.close) * 100;

        setStats({
          currentPrice: latest.close,
          change: change,
          changePercent: changePercent,
          prediction: latest.prediction,
        });
      }
    } catch (error) {
      console.error('Error loading stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <TrendingUp size={32} />
              <h1>Stock Market Predictor</h1>
            </div>
            <p className="tagline">AI-Powered Market Analysis & Visualization</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="controls-section">
            <StockSelector
              selectedStock={selectedStock}
              onStockChange={setSelectedStock}
              timeRange={timeRange}
              onTimeRangeChange={setTimeRange}
            />
          </div>

          <StatsCards stats={stats} loading={loading} />

          <div className="chart-section">
            <div className="section-header">
              <Activity size={24} />
              <h2>Historical Price Chart</h2>
            </div>
            <div className="chart-container">
              {loading ? (
                <div className="loading">Loading market data...</div>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis
                      dataKey="date"
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8' }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8' }}
                      domain={['auto', 'auto']}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#f1f5f9'
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="close"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Close Price"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="high"
                      stroke="#10b981"
                      strokeWidth={1}
                      name="High"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="low"
                      stroke="#ef4444"
                      strokeWidth={1}
                      name="Low"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <BrokerageLinks />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Stock Market Predictor. Market data powered by machine learning predictions.</p>
          <p className="disclaimer">Disclaimer: This tool is for educational purposes only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
