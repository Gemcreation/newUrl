import React from 'react';

const StatisticCard = ({ icon, title, description, offset }) => {
  return (
    <div className="statistic-card" style={{ marginTop: offset }}>
      <div className="statistic-card__icon">
        <img src={process.env.PUBLIC_URL + icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatisticCard;
