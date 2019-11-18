import React from "react";
import {
  Content,
  DropdownList,
  DropdownMenu,
  DropdownTitle,
  DropdownOptions,
  AngleDownImg
} from "./styles";

const SelectIputDropdown = ({
  name,
  title,
  options,
  openDropdown,
  setOpenDropdown,
  changeInput
}) => {
  return (
    <Content>
      <DropdownTitle onClick={() => setOpenDropdown(name, !openDropdown)}>
        {title.toUpperCase()}
        {openDropdown ? (
          <DropdownMenu>
            <DropdownList>
              {options.map((option, i) => (
                <DropdownOptions
                  key={i}
                  onClick={() => changeInput(name, option)}
                >
                  {option.toUpperCase()}
                </DropdownOptions>
              ))}
            </DropdownList>
          </DropdownMenu>
        ) : null}
      </DropdownTitle>
      <AngleDownImg src="https://c7.uihere.com/icons/385/589/282/angle-down-12a635f3823621fd39736e04684aca41.png" />
    </Content>
  );
};

export default SelectIputDropdown;
