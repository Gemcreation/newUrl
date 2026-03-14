import React from 'react';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__content">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className="btn btn-large">Get Started</button>
      </div>
      <div className="hero__image">
        <img src={process.env.PUBLIC_URL + '/images/illustration-working.svg'} alt="Person working at desk" />
      </div>
    </section>
  );
};

export default Hero;
