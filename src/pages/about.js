import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Header from '../components/header'

const About = styled.div`
  font-family: Lato;
  color: #132f3e;
  .inner {
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
    width: 50%;
    @media (max-width: 600px) {
      padding: 0 2%;
      width: 100%;
    }
    h3 {
      font-size: 40px;
      line-height: 30px;
      font-family: 'Playfair Display';
      text-align: center;
      margin-bottom: 30px;
      span {
        font-size: 20px;
      }
      @media (max-width: 600px) {
        font-size: 34px;
      }
    }
    .block {
      display: block;
      height: 3px;
      width: 50px;
      margin: 0 auto;
      background: #0a0a0a;
      margin-bottom: 50px;
    }
    p {
      color: #0a0a0a;
      margin-top: 0px;
      font-weight: 300;
      font-family: 'Lato';
      font-size: 14px;
    }
  }
`

const SkillsList = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  color: #132f3e;
  ul {
    margin-top: 75px;
    padding: none;
    margin: 0;
    margin-right: 100px;
    li {
      font-family: Lato;
      margin: 5px 0;
      font-size: 12px;
      font-weight: 300;
      list-style: none;
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      keywords={[`Hire Developer`, `Hire Designer`, `React Developer`]}
    />
    <Header />
    <About>
      <div className="inner">
        <h3>
          A <span>little</span> about <br /> who I am.
        </h3>
        <span className="block" />
        <p style={{ margin: '0px 0px 40px 0' }}>
          Hello there, My name is Akram Khalid. I help bring new and exciting
          designs and tech to a wide variety of clients. I pride myself on being
          able to turn an idea into a product. Learning new things is part of my
          everyday life and will be for a long time to come.
        </p>
        <p
          style={{
            textAlign: 'center',
            margin: '0px 0px 40px 0',
            fontWeight: 700,
          }}
        >
          Currently making things happen at Vitalstorm Marketing.
        </p>
        <p style={{ textAlign: 'center' }}>Skills & other things:</p>
        <SkillsList>
          <ul>
            <b>Development</b>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Javascript - es6</li>
            <li>Jquery</li>
            <li>React</li>
            <li>Gatsby.js / Next.js</li>
            <li>GraphQL</li>
            <li>REST API</li>
            <li>Webpack</li>
            <li>Node.js / npm</li>
            <li>Wordpress</li>
          </ul>
          <ul>
            <b>Design</b>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Xd</li>
            <li>Protopie</li>
          </ul>
        </SkillsList>
      </div>
    </About>
  </Layout>
)

export default AboutPage
