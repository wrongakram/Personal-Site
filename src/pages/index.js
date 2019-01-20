import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SocialIcons from '../components/social'
import RecentWorks from '../components/recent'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero/>
    <SocialIcons/>
    <RecentWorks/>
  </Layout>
);

export default IndexPage;
