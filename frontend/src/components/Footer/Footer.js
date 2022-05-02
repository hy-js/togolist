import React from "react";

// Styles
import { Wrapper, BlackGH, BlackLI } from "./Footer.styles";

const Footer = () => {
  const GHWebsite = 'https://github.com/hy-js/'
  const LIWebsite = 'https://www.linkedin.com/in/hyjs/'
  return (
    <Wrapper>
        <a href={GHWebsite} target='_blank' rel='noreferrer'>
          <BlackGH />
        </a>
        <a
          href= {LIWebsite}
          target='_blank'
          rel='noreferrer'>
          <BlackLI />
        </a>
        <p>&copy; Rhys Dawson</p>
    </Wrapper>
  );
};

export default Footer;
