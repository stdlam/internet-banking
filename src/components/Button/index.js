import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder20: "rounded-radius20",
  icbCircleBorder25: "rounded-radius25",
  icbRoundedBorder27: "rounded-radius275",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder35: "rounded-radius35",
  RoundedBorder17: "rounded-radius175",
  CircleBorder25: "rounded-radius25",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder15: "rounded-radius15",
};
const variants = {
  icbFillGray103: "bg-gray_103",
  icbOutlineGray300cc: "bg-white_A700 shadow-bs",
  icbOutlineRed700: "border-2 border-red_700 border-solid",
  icbOutlineGreen600: "border-2 border-green_600 border-solid",
  icbFillIndigo600: "bg-indigo_600",
  OutlineIndigo500: "border border-indigo_500 border-solid text-indigo_500",
  OutlineGray300cc: "bg-indigo_700 shadow-bs text-white_A700",
  OutlineIndigo600: "border border-indigo_600 border-solid text-indigo_600",
  FillIndigo600: "bg-indigo_600 text-white_A700",
};
const sizes = {
  smIcn: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  mdIcn: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  lgIcn: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xlIcn: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "icbRoundedBorder20",
    "icbCircleBorder25",
    "icbRoundedBorder27",
    "icbCircleBorder15",
    "icbCircleBorder35",
    "RoundedBorder17",
    "CircleBorder25",
    "RoundedBorder10",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "icbFillGray103",
    "icbOutlineGray300cc",
    "icbOutlineRed700",
    "icbOutlineGreen600",
    "icbFillIndigo600",
    "OutlineIndigo500",
    "OutlineGray300cc",
    "OutlineIndigo600",
    "FillIndigo600",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "xlIcn", "sm", "md"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
