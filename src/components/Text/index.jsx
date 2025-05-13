import React from "react";

const sizes = {
  textxl: "text-[14px] font-normal",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-inter ${sizes[size]} ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
