import styled, { css } from "styled-components";

const ModalImage = styled.div`
  ${props => {
    const { isOpen } = props;
    return css`
      position: fixed;
      display: flex;
      z-index: 5;
      overflow-y: auto;
      color: rgba(255, 255, 255, 0.1);
      left: 0;
      right: 0;
      bottom: 0;
      top: ${isOpen ? "0" : "unset"};
    `;
  }};
`;

const Main = styled.div`
  width: 80%;
  height: 500px;
  background: white;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TitleHeader = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const Cross = styled.img`
  padding: 14px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ImageDetail = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export { ModalImage, Main, TitleHeader, Header, Cross, ImageDetail };
