import React, { useContext, useEffect, useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

import { IconButton } from "@material-tailwind/react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Arrow({ children, disabled, onClick }) {
  return (
    <span
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: "10px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
        // rounded full using style prop
      }}
    >
      {children}
    </span>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <IconButton color="light-blue" size="sm">
        <FontAwesomeIcon icon={faArrowLeft} />
      </IconButton>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <IconButton color="light-blue" size="sm">
        <FontAwesomeIcon icon={faArrowRight} />
      </IconButton>
    </Arrow>
  );
}
