import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react';

function StatsCards({ stats, loading }) {
  const isPositive = stats.change >= 0;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon blue">
          <DollarSign size={24} />
        </div>
        <div className="stat-content">
          <p className="stat-label">Current Price</p>
          <p className="stat-value">
            {loading ? '---' : `$${stats.currentPrice.toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="stat-card">
        <div className={`stat-icon ${isPositive ? 'green' : 'red'}`}>
          {isPositive ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
        </div>
        <div className="stat-content">
          <p className="stat-label">Change</p>
          <p className={`stat-value ${isPositive ? 'positive' : 'negative'}`}>
            {loading ? '---' : `${isPositive ? '+' : ''}${stats.change.toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="stat-card">
        <div className={`stat-icon ${isPositive ? 'green' : 'red'}`}>
          <Activity size={24} />
        </div>
        <div className="stat-content">
          <p className="stat-label">Change %</p>
          <p className={`stat-value ${isPositive ? 'positive' : 'negative'}`}>
            {loading ? '---' : `${isPositive ? '+' : ''}${stats.changePercent.toFixed(2)}%`}
          </p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon purple">
          <TrendingUp size={24} />
        </div>
        <div className="stat-content">
          <p className="stat-label">AI Prediction</p>
          <p className="stat-value">
            {loading ? '---' : stats.prediction === 1 ? 'Bullish' : stats.prediction === 0 ? 'Bearish' : 'Neutral'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
