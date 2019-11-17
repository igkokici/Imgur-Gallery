import styled from "styled-components";

const ButtonDiv = styled.div`
  border-radius: 25px;
  border: 1px solid transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 22px;
  height: 41px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  min-width: 183px;
  cursor: pointer;
  outline: none !important;
  background-color: #2c80ff;
  color: #fff;
  :hover {
    background-color: #1c71c7;
  }
`;

export { ButtonDiv };
