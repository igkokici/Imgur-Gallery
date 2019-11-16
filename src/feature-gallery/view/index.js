import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import api from "../api";
import { totalImages } from "../selectors";
import {
  ProjectName,
  Header,
  GridGallery,
  ImageDiv,
  ItemContainer,
  ImageDescription
} from "./styles";

const { getImgurGallery } = api;

const ImgurGallery = props => {
  const { getImgurGallery, images } = props;
  useEffect(() => {
    getImgurGallery();
  }, [getImgurGallery]);
  return (
    <Fragment>
      <Header>
        <ProjectName>Imgur Photo Gallery</ProjectName>
      </Header>
      <GridGallery>
        {images.map(image => (
          <ItemContainer key={image.id}>
            <ImageDiv src={image.link} />
            <ImageDescription>{image.title}</ImageDescription>
          </ItemContainer>
        ))}
      </GridGallery>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    images: totalImages(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getImgurGallery: () =>
      getImgurGallery(
        { section: "hot", sort: "viral", imageWindow: "day", page: 1 },
        { showViral: true, mature: false },
        dispatch
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgurGallery);
