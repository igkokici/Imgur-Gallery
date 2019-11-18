import styled from "styled-components";

const Content = styled.div`
  display: flex;
`;

const DropdownTitle = styled.div`
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: left;
  color: #babec4;
  cursor: pointer;
  margin-top: 30px;
  padding-left: 20px;
  width: fit-content;
  :hover {
    color: white;
  }
`;

const DropdownMenu = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: fit-content;
  margin-left: -20px;
  z-index: 1000;
  padding-top: 10px;
`;

const DropdownList = styled.div`
  border-radius: 6px;
  background-color: #53565d;
  box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.78);
  padding-top: 5px;
  padding-bottom: 13px;
  overflow-y: auto;
`;

const DropdownOptions = styled.div`
  box-sizing: border-box;
  color: #b4b9c2;
  cursor: pointer;
  display: block;
  line-height: 2.14;
  letter-spacing: 1px;
  width: auto;
  padding-left: 18px;
  padding-right: 26px;
  text-align: left;
  white-space: nowrap;
  :hover {
    color: white;
  }
`;

const AngleDownImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 25px;
`;

export {
  DropdownTitle,
  DropdownMenu,
  DropdownList,
  DropdownOptions,
  AngleDownImg,
  Content
};
