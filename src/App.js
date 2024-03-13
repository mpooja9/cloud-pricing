import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isAnnually, setIsAnnually] = useState(true);

  const togglePricing = () => {
    setIsAnnually((prevIsAnnually) => !prevIsAnnually);
  };

  return (
    <div>
      <header>
        <h1>Our Pricing</h1>
        <div className="toggle">
          <label>Annually</label>
          <div className="toggle-btn">
            <input type="checkbox" className="checkbox" id="checkbox" onChange={togglePricing} checked={isAnnually} />
            <label className="sub" id="sub" htmlFor="checkbox">
              <div className="circle"></div>
            </label>
          </div>
          <label>Monthly</label>
        </div>
      </header>
      {/* Pricing cards */}
      <div className="cards">
        {/* Create cards for each pricing option */}
        <div className="card shadow">
          <ul>
            <li className="pack">Basic</li>
            <li className="price bottom-bar">{isAnnually ? '$19.99' : '$199.99'}</li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">5 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li>
              <button className="btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div className={`card ${isAnnually ? '' : 'active'}`}>
          <ul>
            <li className="pack">Professional</li>
            <li className="price bottom-bar">{isAnnually ? '$24.99' : '$249.99'}</li>
            <li className="bottom-bar">1 TB Storage</li>
            <li className="bottom-bar">5 Users Allowed</li>
            <li className="bottom-bar">Send up to 10 GB</li>
            <li>
              <button className={`btn ${isAnnually ? '' : 'active-btn'}`}>Learn More</button>
            </li>
          </ul>
        </div>
        <div className="card shadow">
          <ul>
            <li className="pack">Master</li>
            <li className="price bottom-bar">{isAnnually ? '$39.99' : '$399.99'}</li>
            <li className="bottom-bar">2 TB Storage</li>
            <li className="bottom-bar">10 Users Allowed</li>
            <li className="bottom-bar">Send up to 20 GB</li>
            <li>
              <button className="btn">Learn More</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
