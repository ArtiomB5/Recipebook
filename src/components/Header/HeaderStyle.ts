import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33.3333333%;
  background: white;
`
export const TitleContainer = styled.div`
  font-size: 10vmin;
  font-family: "Sen", sans-serif;
  color: #1c203b;
`
export const CircleContainer = styled.div`
  height: 5vmin;
  width: 5vmin;
  background: #ffcc00;
  border-radius: 100%;
  margin-bottom: 7vmin;
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-duration: 2s;
`
export const LinkStyle = {
  flex: '0 1 30%',
  textDecoration: 'none',
  color: 'black',
}