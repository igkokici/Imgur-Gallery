import React from "react";
import { ModalImage, Main, Header, TitleHeader, Cross, ImageDetail } from "./styles";
import { ImageDiv, VideoDiv } from "../styles";

const Modal = ({ isOpen, close, image }) => {
  const { title, description, link, ups, downs, score } = image;
  return (
    <ModalImage isOpen={isOpen}>
      {isOpen && (
        <Main>
          <Header>
            <TitleHeader>{title}<br/>{description}</TitleHeader>
            <Cross
              src="https://www.freeiconspng.com/uploads/white-close-button-png-16.png"
              onClick={() => close()}
            />
          </Header>
          <ImageDetail>
            <div>UPS: {ups} </div>
            <div>DOWNS: {downs} </div>
            <div>SCORE: {score} </div>
          </ImageDetail>
          {!link.includes("mp4") ? (
            <ImageDiv src={link} />
          ) : (
            <VideoDiv loop autoPlay draggable="false">
              <source src={link}></source>
            </VideoDiv>
          )}
        </Main>
      )}
    </ModalImage>
  );
};

export default Modal;
