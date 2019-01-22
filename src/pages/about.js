import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'

const About = styled.div`
  display: flex;
  align-items: center;
      font-family: Circular Std Book;
  .inner {
    padding-left: 100px;
    margin: 200px 0;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
    width: 65%;
    @media (max-width: 600px) {
     padding-left: 5%;
     width: 100%;
    }
    h3 {
      color: #0a0a0a;
      font-size: 52px;
      font-family: 'Circular Std Black';
      span {
        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: 0a0a0a;
      }
      @media (max-width: 600px) {
       font-size: 34px;
      }
    }
    .block {
      display: block;
      height: 4px;
      width: 50px;
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
  display: flex;
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
          <h3>A little about <br></br> <span>who</span> I am.</h3>
          <span className="block"></span>
          <p>Hello there, My name is Akram Khalid. I help bring new and exciting designs and tech to a wide variety of clients.
          I pride myself on being able to turn an idea into a product. Learning new things is part of my everday life and will be for a long time to come.
          </p>
          <p>Currently making things happen at Vitalstorm Marketing.</p>
          <p>Skills & other things:</p>
          <SkillsList>
            <ul>
              <b>Design</b>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Xd</li>
              <li>Protopie</li>
            </ul>
            <ul>
              <b>Development</b>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript - es6</li>
              <li>Jquery</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Node</li>
              <li>Wordpress</li>
            </ul>
          </SkillsList>
      </div>
      </About>
  </Layout>
);




export default AboutPage;
