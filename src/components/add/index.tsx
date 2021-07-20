import React, { FC } from "react";
import Icon from "../icon";
import "./index.scss";

const AddButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="common-add-task bg-red-500 transition-all duration-300 border-none rounded-full font-bold flex items-center justify-center"
    >
      <Icon type="plus" />
    </button>
  );
};

export default AddButton;
