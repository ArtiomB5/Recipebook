import styled from "styled-components";

export const AddRecipeWrapperContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`
export const AddRecipeButtonContainer = styled.div`
  max-width: 30%;
  text-align: center;
  flex: 0 1 30%;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin: 15px auto;

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
export const AddRecipeLineContainer = styled.hr`
  overflow: visible;
  border: 0;
  content: "";
  background-color: #ffcc00;
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: relative;

  &:before {
    content: "";
    background-color: #ffcc00;
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    left: -32px;
    animation: dot-move-left 1s ease-out forwards;
  }

  &:after {
    content: "";
    background-color: #ffcc00;
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    left: 32px;
    animation: dot-move-right 1s ease-out forwards;
  }
}

@keyframes dot-move-right {
  0% {
    left: 0;
  }
  100% {
    left: 32px;
  }
}

@keyframes dot-move-left {
  0% {
    left: 0;
  }
  100% {
    left: -32px;
  }
}

{`
export const TitleAndLinkTextAreaContainer = styled.textarea`
  width: 35%;
  height: 50px;

  @media (max-width: 768px) {
    width: 80%;
    height: 20vh;
  }
`
export const TextAreaStyleContainer = styled.textarea`
  width: 35%;
  height: 200px;

  @media (max-width: 768px) {
    width: 80%;
    height: 20vh;
  }
`
