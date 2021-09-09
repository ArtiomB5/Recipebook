import styled from "styled-components";

export const MenuWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MenuButtonContainer = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin: 15px;

  &::after {
    content: "";
    background-color: #ffcc00;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover::after {
    top: 0;
    left: 0;
  }
`
export const LinkStyle = {
  flex: '0 1 30%',
  textDecoration: 'none',
  color: 'black',
}