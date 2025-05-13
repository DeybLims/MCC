import React from "react";

const sizes = {
  textmd: "text-[10px] font-medium",
  headingmd: "text-[10px] font-semibold",
  heading2xl: "text-[16px] font-semibold lg:text-[13px]",
  heading5xl: "text-[22px] font-semibold lg:text-[18px]",
  heading6xl: "text-[27px] font-semibold lg:text-[22px] md:text-[25px] sm:text-[23px]",
  heading8xl: "text-[40px] font-bold lg:text-[40px] md:text-[44px] sm:text-[38px]",
  heading9xl: "text-[54px] font-bold lg:text-[45px] md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "heading2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-amber-400 font-inter ${sizes[size]} ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
