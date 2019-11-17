import React from "react";
import { ButtonDiv } from "./styles";

const ButtonViral = ({ viral, setViral }) => {
  return (
    <ButtonDiv onClick={() => setViral(!viral)}>
      {viral ? "hide viral" : "show viral"}
    </ButtonDiv>
  );
};

export default ButtonViral;
