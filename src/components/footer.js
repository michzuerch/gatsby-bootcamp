import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.modules.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.Footer}>
      <p>Author: {data.site.siteMetadata.author}</p>
    </footer>
  );
};

export default Footer;
