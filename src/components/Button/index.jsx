import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]"
};

const variants = {
  outline: {
    amber_400: "border-amber-400 border-[3.84px] border-solid text-amber-400"
  }
};

const sizes = {
  "5x1": "h-[70px] px-5 text-[23px]"
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "5x1",
  color = "amber_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-amber-400 font-poppins text-[23.04px] font-extrabold border-amber-400 border-[3.84px] border-solid min-w-[172px] rounded-[12px] sm:text-[19px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["5x1"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["amber_400"])
};

export { Button };