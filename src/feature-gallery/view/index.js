import React, { useEffect, Fragment, useState } from "react";
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
  ImageDescription,
  SkeletonDiv,
  DropdownDisplay
} from "./styles";
import DropdownInput from "./Dropdown";
import ButtonViral from "./Button";
import ModalImgur from "./Modal";

const { getImgurGallery } = api;

const ImgurGallery = props => {
  const { getImgurGallery, images, busy } = props;
  const [openDropdown, setOpenDropdown] = useState({});
  const [selectedProps, setSelectedProps] = useState({
    section: "hot",
    sort: "viral",
    imageWindow: "day"
  });
  const [showViral, setShowViral] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [singleImage, setSingleImage] = useState({});
  let cnt = 0;

  const Dropdowns = [
    {
      name: "section",
      options: ["hot", "top", "user"]
    },
    {
      name: "sort",
      options: ["viral", "top", "time", "rising"]
    },
    {
      name: "imageWindow",
      options: ["day", "week", "month", "year", "all"]
    }
  ];

  const gridColumns = images => {
    let columnLength = images.length / 4;

    return Array(4)
      .fill()
      .map((val, i) => {
        const returnValue = (
          <div key={i}>
            {busy ? (
              <Fragment>
                <SkeletonDiv />
                <SkeletonDiv />
                <SkeletonDiv />
              </Fragment>
            ) : (
              images
                .slice(cnt, cnt + columnLength)
                .map(({ id, link, title }) => (
                  <ItemContainer
                    key={id}
                    onClick={() => {
                      setOpenModal(true);
                      document.body.style.overflow = "hidden";
                      setSingleImage(images.find(image => image.id === id));
                    }}
                  >
                    {!link.includes("mp4") ? (
                      <ImageDiv src={link} />
                    ) : (
                      <VideoDiv loop autoPlay draggable="false">
                        <source src={link}></source>
                      </VideoDiv>
                    )}

                    <ImageDescription>{title}</ImageDescription>
                  </ItemContainer>
                ))
            )}
          </div>
        );

        cnt = cnt + columnLength;
        return returnValue;
      });
  };
  useEffect(() => {
    getImgurGallery(
      { ...selectedProps },
      selectedProps.section === "user" ? { showViral } : {}
    );
  }, [getImgurGallery, selectedProps, showViral]);
  return (
    <Fragment>
      <Header>
        <ProjectName>Imgur Photo Gallery</ProjectName>
      </Header>
      <DropdownDisplay>
        {Dropdowns.map(({ name, options }, i) => {
          options =
            name === "sort" && selectedProps.section === "user"
              ? options
              : options.filter(option => option !== "rising");
          return selectedProps.section !== "top" &&
            name === "imageWindow" ? null : (
            <DropdownInput
              key={i}
              name={name}
              title={selectedProps[name]}
              options={options}
              openDropdown={openDropdown[name]}
              setOpenDropdown={(type, value) =>
                setOpenDropdown({ ...openDropdown, [type]: value })
              }
              changeInput={(type, option) =>
                setSelectedProps({ ...selectedProps, [type]: option })
              }
            />
          );
        })}
        {selectedProps.section === "user" && (
          <ButtonViral
            viral={showViral}
            setViral={() => setShowViral(!showViral)}
          />
        )}
      </DropdownDisplay>
      <GridGallery>{gridColumns(images)}</GridGallery>
      <ModalImgur
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
          document.body.style.overflow = "auto";
        }}
        image={singleImage}
      />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    images: totalImages(state),
    busy: state.busy
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getImgurGallery: ({ ...selectedProps }, { showViral }) =>
      getImgurGallery({ ...selectedProps, page: 1 }, { showViral }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgurGallery);
