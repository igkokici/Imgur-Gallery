import React, { Fragment } from "react";
import {
  DropdownList,
  DropdownMenu,
  DropdownTitle,
  DropdownOptions
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
    <Fragment>
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
    </Fragment>
  );
};

export default SelectIputDropdown;
