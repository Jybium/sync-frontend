import React from "react";

const Button = ({ classname, type, title, }) => {
  const style = `rounded-lg py-2 px-4 + ${classname}`;

  return (
    <button type={"submit" || type} className={style}>
      {title}
    </button>
  );
};

export default Button;
