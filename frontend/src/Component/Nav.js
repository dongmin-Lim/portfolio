import styled from "styled-components";

function Nav() {
  return (
    <Frame>
      <a href="/">HOME</a>
      <a href="/profile">PROFILE</a>
      <a href="/tech">TECH</a>
      <a href="/portfolio">PORTFOLIO</a>
      <a href="/talk">TALK</a>
    </Frame>
  );
}

export default Nav;

const Frame = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  font-size: 25px;
  line-height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: right;
  a {
    text-decoration: none;
    color: white;
    margin-right: 20px;
  }

  a:hover {
    text-decoration: underline;
    color: white;
  }
`;
