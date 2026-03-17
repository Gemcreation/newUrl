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


// import React from 'react';
// // import '../styles/main.scss';
// import heroImg from '../assets/images/illustration-working.svg';

// const Hero = () => {
//   return (
//     <section className="hero container">
//       <div className="hero-content">
//         <h1>More than just shorter links</h1>
//         <p>
//           Build your brand’s recognition and get detailed insights on how your links are performing.
//         </p>
//         <button className="cta-btn large">Get Started</button>
//       </div>
//       <div className="hero-image">
//       <img 
//           src={heroImg} 
//           alt="Hero Illustration img" 
//         />
//         {/* <img 
//           src={require('../assets/hero_illustration.png')} 
//           alt="Illustration of a person working at a desk" 
//         /> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;
