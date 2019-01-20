import React, {Component} from 'react'
import styled from 'styled-components'
import Image from './image';
import ImageSecond from './image1';
import ImageThird from './image2';

const RecentWrapper = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
  }
  h3 {
    font-family: 'Circular Std Book';
    margin-bottom: .4rem;
  }
  p {
    font-family: 'Circular Std Book';
    font-weight: 300;
    font-size: 12px;
    width: 300px;
    margin: 0;
  }
`


const RecentContent = styled.div`
  width: 30%;

`

const ProjectList = styled.div`
  width: 70%;
  @media (max-width: 860px) {
    width: 100%;
    margin-top: 100px;
  }
`

const Project = styled.div`
  margin: 0 0 100px 0;
  z-index: -3;
  span {
    display: block;
    z-index: -1 !important;
    display: flex;
    align-items: center;
  }
  img {
    margin: 0 auto !important;
    width: 75%;
    @media (max-width: 860px) {
      width: 100%;
      padding-right: 5%;
    }
  }
`


class RecentWorks extends Component {

  render() {
    return (
      <RecentWrapper>
      <RecentContent>
      <h3>Recent Works</h3>
      <p>This is only a tiny higlight of things I have available to show. More exciting projects coming soon ;).</p>
      </RecentContent>
        <ProjectList>
        <Project>
          <span alt="project1" >
            <img src={require('../images/dribble_travel.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <img src={require('../images/planr2.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <img src={require('../images/Vistra.gif')} alt="loading..." />
          </span>
        </Project>
        <Project>
          <span >
            <Image/>
          </span>
        </Project>
        <Project>
          <span >
            <ImageThird/>
          </span>
        </Project>
        <Project>
          <span>
            <ImageSecond/>
          </span>
        </Project>
        </ProjectList>
      </RecentWrapper>
    )
  }
}

export default RecentWorks
