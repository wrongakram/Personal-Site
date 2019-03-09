import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SocialIcons from '../components/social'
import RecentWorks from '../components/recent'
import Header from '../components/header';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Freelance Web Developer`, `Web Design`, `Javascript Developer`, `UI UX Designer`]} />
    <Header/>
    <Hero/>
    <SocialIcons/>
    <RecentWorks/>
  </Layout>
);

export default IndexPage;
