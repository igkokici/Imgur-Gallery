import styled, { css } from "styled-components";

const Header = styled.div`
  width: 100%;
  top: 0;
  margin-top: -8px;
  background-color: #474a51;
  padding-bottom: 36px;
  position: sticky;
  z-index: 100;
  box-shadow: 0 0 25px 5px #000;
`;

const ProjectName = styled.div`
  padding: 20px 0 0 20px;
  font-size: 18px;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: white;
`;

const GridGallery = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  > div >div {
    margin-bottom: 20px;
  }
`;

const ItemContainer = styled.div`
  border-radius: 4px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background-size: 145px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #2e3035;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
  }
`;

const ImageDiv = styled.img`
  cursor: pointer;
  width: 100%;
`;

const VideoDiv = styled.video`
  cursor: pointer;
  width: 100%;
`;

const ImageDescription = styled.div`
  padding-top: 12px;
  padding-bottom: 20px;
  color: #fff;
  width: 100%;
  bottom: 0;
`;

export {
  GridGallery,
  ImageDiv,
  VideoDiv,
  ItemContainer,
  Header,
  ProjectName,
  ImageDescription
};
