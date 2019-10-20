import React from 'react';

const Banner = ({ image, title, subheading }) => (
  <section
    className="banner"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
    }}
  >
    <div className="container">
      <h1>{title}</h1>
      <h2>{subheading}</h2>
    </div>
  </section>
);

export default Banner;