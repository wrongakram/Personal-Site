import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'

const About = styled.div`
  font-family: Circular Std Book;
  margin: 100px 0;
  .inner {
    margin: 0 auto;
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
      color: #0a0a0a;
      font-size: 40px;
      line-height: 30px;
      font-family: 'Circular Std Black';
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
      font-family: 'Circular Std Book';
      font-size: 14px;
    }
  }

`

const SkillsList = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  ul {
    margin-top: 75px;
    padding: none;
    margin: 0;
    margin-right: 100px;
    li {
      font-family: Circular Std Book;
      margin: 5px 0;
      font-size: 12px;
      font-weight: 300;
      list-style: none;
    }
  }
`


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <About>
        <div className="inner">
          <h3>A <span>little</span> about <br></br> who I am.</h3>
          <span className="block"></span>
          <p style={{margin: '0px 0px 40px 0'}} >Hello there, My name is Akram Khalid. I help bring new and exciting designs and tech to a wide variety of clients.
          I pride myself on being able to turn an idea into a product. Learning new things is part of my everday life and will be for a long time to come.
          </p>
          <p style={{textAlign: 'center', margin: '0px 0px 40px 0', fontWeight: 700}}>Currently making things happen at Vitalstorm Marketing.</p>
          <p style={{textAlign: 'center'}}>Skills & other things:</p>
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
);




export default AboutPage;
