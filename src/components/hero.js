import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite, Expo } from 'gsap'

const Title = styled.h1`
  bottom: -4rem;
  margin: 0;
  font-size: 4rem;
  line-height: 4rem;
  color: #132f3e;
  position: absolute;
  font-family: 'Playfair Display';
  font-weight: 900;
  @media (max-width: 600px) {
    opacity: 0;
    bottom: -2rem;
    line-height: 4rem;
    font-size: 3rem;
  }
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

const HeroDetails = styled.div`
  padding-left: 100px;
  margin-top: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: -1;
  @media (max-width: 600px) {
    padding-left: 5%;
  }
`

const TitleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100px;
  width: 100%;
  @media (max-width: 600px) {
    overflow: visible;
    height: 8rem;
  }
`

const Gradient = styled.span`
  background: linear-gradient(
    270deg,
    #ff5f6d,
    #ffc371,
    #c34dbf,
    #ff4b1f,
    #ff9068,
    #16bffd,
    #a84dc3,
    #cb3066,
    #4ca1af,
    #c4e0e5
  );
  background-size: 2000% 2000%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HighlightWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  opacity: 0;
`

const Highlight = styled.h3`
  color: #132f3e;
  font-size: 14px;
  padding: 0.4em 1em 0.4em 0;
  font-family: 'Lato';
  font-weight: 700;
  position: relative;
  margin-right: 25px;
  @media (max-width: 600px) {
    margin-top: -25px;
    padding-left: 4px;
    font-size: 16px;
  }
  span {
    opacity: 0;
    animation: appear-text 0.0001s linear forwards;
    animation-delay: 1.4s;
  }
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background: #132f3e;
    animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 1s;
  }

  @keyframes rev-block {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }

  @keyframes appear-text {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const MobileDelete = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`

class Hero extends Component {
  constructor(props) {
    super(props)
    this.firstTitle = null
    this.secondTitle = null
    this.highlight = null
    // reference to the animation
    this.myTween = null
  }
  componentDidMount() {
    this.myTween = new TimelineLite()
    this.myTween
      .to(this.firstTitle, 0.6, {
        opacity: 1,
        delay: 0.4,
        ease: Expo.easeOut,
        x: 0,
        y: -100,
      })
      .to(this.secondTitle, 0.6, {
        opacity: 1,
        delay: -0.4,
        ease: Expo.easeOut,
        x: 0,
        y: -100,
      })
      .to(this.highlight, 0.6, { opacity: 1, delay: -0.2, ease: Expo.easeOut })
  }
  render() {
    return (
      <HeroWrapper>
        <HeroDetails>
          <TitleContainer>
            <Title ref={a => (this.firstTitle = a)}>Creating Unique</Title>
          </TitleContainer>
          <TitleContainer>
            <Title ref={a => (this.secondTitle = a)}>
              Digital <Gradient>Experiences.</Gradient>
            </Title>
          </TitleContainer>
          <HighlightWrapper ref={div => (this.highlight = div)}>
            <Highlight>
              <span>
                <MobileDelete>UI</MobileDelete> Designer
              </span>
            </Highlight>
            <Highlight>
              <span>
                <MobileDelete>Front End</MobileDelete> Developer
              </span>
            </Highlight>
            <Highlight>
              <span>Working on Design Time</span>
            </Highlight>
          </HighlightWrapper>
        </HeroDetails>
      </HeroWrapper>
    )
  }
}

export default Hero
