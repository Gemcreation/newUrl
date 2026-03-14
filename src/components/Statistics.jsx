import React from 'react';
import StatisticCard from './StatisticCard';

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics__header">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

        <div className="statistics__cards">
          <div className="statistics__line"></div>
          <StatisticCard 
            icon="/images/icon-brand-recognition.svg"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            offset="0"
          />
          <StatisticCard 
            icon="/images/icon-detailed-records.svg"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            offset="40px"
          />
          <StatisticCard 
            icon="/images/icon-fully-customizable.svg"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            offset="80px"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
