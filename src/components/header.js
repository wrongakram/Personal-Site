import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const CursorItem = styled.div`
  --size: 6px;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  position: absolute;
  /* z-index: 999; */
  transform: translate(-50%, -50%);
  pointer-events: none;
  top: -100px;
  left: -100px;

  ${props =>
    props.shadow &&
    css`
      opacity: 0.75;
      background: #efefff;
      --size: 50px;
      transition: top 0.25s, left 0.25s, width 0.5s, height 0.5s,
        background 0.35s;
      transition-timing-function: ease-out;
      @media (max-width: 800px) {
        display: none !important;
      }
    `}

  ${props =>
    props.dot &&
    css`
      background: #000;
      transition: width 0.25s, height 0.25s;
      @media (max-width: 800px) {
        display: none !important;
      }
    `}
`

const NavItem = styled.li`
  margin: 0 20px;
  padding: 0;
  list-style: none;
  a {
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
  marginbottom: 1.45rem;
  position: fixed;
  width: 100%;
  height: 70px;
  background: #fff;
  top: 0;
  border-bottom: 1px solid #f7f7f7;
  @media (max-width: 600px) {
    padding: 10px 5%;
  }
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.hoverLink = null
    this.hoverLink2 = null
    this.myTween = null
    this.header = null
  }

  componentDidMount() {
    window.onmousemove = e => {
      this.cursorShadow.style.left = e.pageX + 'px'
      this.cursorShadow.style.top = e.pageY + 'px'
      this.cursorDot.style.left = e.pageX + 'px'
      this.cursorDot.style.top = e.pageY + 'px'
    }
    this.hoverLink.onmouseover = () => {
      this.cursorShadow.classList.add('active')
      this.cursorDot.classList.add('active')
    }

    this.hoverLink.onmouseleave = () => {
      this.cursorShadow.classList.remove('active')
      this.cursorDot.classList.remove('active')
    }

    this.hoverLink2.onmouseover = () => {
      this.cursorShadow.classList.add('active')
      this.cursorDot.classList.add('active')
    }

    this.hoverLink2.onmouseleave = () => {
      this.cursorShadow.classList.remove('active')
      this.cursorDot.classList.remove('active')
    }
  }

  render() {
    return (
      <NavWrapper ref={a => (this.header = a)}>
        <CursorItem
          shadow
          ref={div => (this.cursorShadow = div)}
          className="cursor-shadow"
        />
        <CursorItem
          dot
          ref={div => (this.cursorDot = div)}
          className="cursor-dot"
        />
        <div
          style={{
            margin: `0 auto`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <NavItem ref={a => (this.hoverLink2 = a)}>
            <Link to="/">A.</Link>
          </NavItem>
          <div>
            <ul
              style={{
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <NavItem ref={a => (this.hoverLink = a)}>
                <Link to="/about">about</Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </NavWrapper>
    )
  }
}

export default Header
