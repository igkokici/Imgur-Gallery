import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import api from "../api";
import { totalImages } from "../selectors";
import {
  ProjectName,
  Header,
  GridGallery,
  ImageDiv,
  VideoDiv,
  ItemContainer,
  ImageDescription
} from "./styles";

const { getImgurGallery } = api;

const ImgurGallery = props => {
  const { getImgurGallery, images } = props;
  let cnt = 0;

  const gridColumns = images => {
    let columnLength = images.length / 4;

    return Array(4)
      .fill()
      .map(() => {
        const returnValue = (
          <div>
            {images.slice(cnt, cnt + columnLength).map(image => (
              <ItemContainer key={image.id}>
                {!image.link.includes("mp4") ? (
                  <ImageDiv src={image.link} />
                ) : (
                  <VideoDiv loop autoPlay draggable="false">
                    <source src={image.link}></source>
                  </VideoDiv>
                )}

                <ImageDescription>{image.title}</ImageDescription>
              </ItemContainer>
            ))}
          </div>
        );

        cnt = cnt + columnLength;
        return returnValue;
      });
  };
  useEffect(() => {
    getImgurGallery();
  }, [getImgurGallery]);
  return (
    <Fragment>
      <Header>
        <ProjectName>Imgur Photo Gallery</ProjectName>
      </Header>
      <GridGallery>{gridColumns(images)}</GridGallery>
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
