import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/logosClients.css";

const logos = [
  "Airbnb.png",
  "Amazon.png",
  "Atlassian.png",
  "BookMyShow.png",
  "FedEx.png",
  "Gatsby.png",
  "Google.png",
  "Grubhub.png",
  "Hubspot.png",
  "Microsoft.png",
  "OLA.png",
  "OYO.png",
  "Servicenow.png",
  "Strapi.png",
  "Walmart.png"
];

const LogosClients = () => {
  return (
    <section className="logos-section">
      <div className="logos-container">
        {logos.map((logo) => (
          <div key={logo} className="logo-item">
            <img src={`/logos/${logo}`} alt={logo.split('.')[0]} className="logo-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('logosClients-root'));
root.render(<LogosClients />);
