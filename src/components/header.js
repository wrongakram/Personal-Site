import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {TimelineLite, Expo,} from "gsap";

const CursorItem = styled.div`
  --size: 6px;
  height: var(--size);
  width:  var(--size);
  border-radius: 50%;
  position: absolute;
  /* z-index: 999; */
  transform: translate(-50%, -50%);
  pointer-events: none;
  top: -100px;
  left: -100px;

  ${props => props.shadow && css`
    opacity: .75;
    background: #efefff;
      --size: 50px;
    transition: top .25s, left .25s, width .5s, height .5s, background .35s;
    transition-timing-function: ease-out;
    visibility: hidden;
  `}

  ${props => props.dot && css`
    background: #000;
    transition: width .25s, height .25s;
    visibility: hidden;
  `}


`

const NavItem = styled.li`
  margin: 0 20px;
  padding: 0;
  list-style: none;
  a {
    margin-top: 10px;
    text-decoration: none;
    font-size: 12px;
    text-transform: uppercase;
    color: #000;
    font-family: 'Lato';
    font-weight: 700;
  }
  `

  const NavWrapper = styled.div`
  padding: 25px 100px;
  marginBottom: 1.45rem;
  position: fixed;
  width: 100%;
  height: 70px;
  opacity: 0;
  transform: translateY(10px);
  background: #fff;
  @media (max-width: 600px) {
    padding: 10px 5%;
  }
  `


class Header extends Component {
  constructor(props) {
    super(props);
    this.hoverLink = null;
    this.hoverLink2 = null;
    this.myTween = null;
    this.header = null;
  }


  componentDidMount(){
    this.myTween = new TimelineLite();
    this.myTween
    .to(this.header, .6, {opacity: 1, delay: .8 ,ease: Expo.easeOut, x: 0, y: 0})


    this.cursorShadow.style.visibility = 'visible';
    this.cursorDot.style.visibility = 'visible';

    window.onmousemove = (e) => {
      this.cursorShadow.style.left = e.pageX + 'px';
      this.cursorShadow.style.top = e.pageY + 'px';
      this.cursorDot.style.left = e.pageX + 'px';
      this.cursorDot.style.top = e.pageY + 'px';
    }
    this.hoverLink.onmouseover = () => {
     this.cursorShadow.classList.add('active');
     this.cursorDot.classList.add('active');
  }

     this.hoverLink.onmouseleave = () => {
     this.cursorShadow.classList.remove('active');
     this.cursorDot.classList.remove('active');
  }


    this.hoverLink2.onmouseover = () => {
     this.cursorShadow.classList.add('active');
     this.cursorDot.classList.add('active');
  }

     this.hoverLink2.onmouseleave = () => {
     this.cursorShadow.classList.remove('active');
     this.cursorDot.classList.remove('active');
  }
}

  render() {
    return (
      <NavWrapper ref={div => this.header = div}>
        <CursorItem shadow ref={div => this.cursorShadow = div} className="cursor-shadow"></CursorItem>
        <CursorItem dot ref={div => this.cursorDot = div} className="cursor-dot"></CursorItem>
        <div
          style={{
            margin: `0 auto`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
        <NavItem ref={a => this.hoverLink2 = a} ><AniLink cover bg="#000" to="/" duration={1}>A.</AniLink></NavItem>
          <div>
            <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }} >
              <NavItem ref={a => this.hoverLink = a} ><AniLink cover bg="#000" to="/about" duration={1}>about</AniLink></NavItem>
            </ul>
          </div>
        </div>
      </NavWrapper>
    )
  }
}


export default Header
