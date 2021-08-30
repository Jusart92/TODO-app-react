import React from "react";
import "./TodoIcon.css";
import { ReactComponent as CheckIcon } from "./check.svg";
import { ReactComponent as DeleteIcon } from "./trash.svg";

const iconTypes = {
  check: (color) => (
    <CheckIcon className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteIcon className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
