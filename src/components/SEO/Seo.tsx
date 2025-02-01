import React from 'react';
import { Helmet } from 'react-helmet-async';

// contains the metadata of a page: title, meta description
// tags, etc..
interface MetaProps {
  title: string;
}

const SEO: React.FC<MetaProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;

// TO-DO: Write Documentation
