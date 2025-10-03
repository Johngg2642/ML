import React from 'react';
import { ExternalLink } from 'lucide-react';

const brokerages = [
  {
    name: 'Fidelity',
    url: 'https://www.fidelity.com',
    description: 'Full-service brokerage with research tools'
  },
  {
    name: 'Charles Schwab',
    url: 'https://www.schwab.com',
    description: 'Comprehensive trading platform'
  },
  {
    name: 'TD Ameritrade',
    url: 'https://www.tdameritrade.com',
    description: 'Advanced trading tools and education'
  },
  {
    name: 'E*TRADE',
    url: 'https://us.etrade.com',
    description: 'User-friendly trading platform'
  },
  {
    name: 'Interactive Brokers',
    url: 'https://www.interactivebrokers.com',
    description: 'Professional-grade trading platform'
  },
  {
    name: 'Robinhood',
    url: 'https://robinhood.com',
    description: 'Commission-free trading'
  },
  {
    name: 'Vanguard',
    url: 'https://investor.vanguard.com',
    description: 'Low-cost investing and retirement'
  },
  {
    name: 'Webull',
    url: 'https://www.webull.com',
    description: 'Free stock & options trading'
  }
];

function BrokerageLinks() {
  return (
    <div className="brokerage-section">
      <div className="section-header">
        <ExternalLink size={24} />
        <h2>Connect to Your Brokerage</h2>
      </div>
      <p className="section-description">
        Ready to trade? Access your brokerage account directly through these trusted platforms.
      </p>
      <div className="brokerage-grid">
        {brokerages.map((brokerage) => (
          <a
            key={brokerage.name}
            href={brokerage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brokerage-card"
          >
            <div className="brokerage-content">
              <h3>{brokerage.name}</h3>
              <p>{brokerage.description}</p>
            </div>
            <ExternalLink size={20} className="brokerage-icon" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default BrokerageLinks;
