import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillGray102: "bg-gray_102",
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  GradientWhiteA70026WhiteA70026: "bg-gradient ",
};
const shapes = {
  srcCircleBorder25: "rounded-radius25",
  RoundedBorder15: "rounded-radius15",
  CustomBorderBL25:
    "rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0] rounded-tr-[0]",
};
const sizes = {
  smSrc: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  sm: "lg:pb-[13px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] lg:pt-[10px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] lg:px-[10px] xl:px-[13px] px-[15px] 3xl:px-[18px]",
  md: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  lg: "lg:px-[16px] xl:px-[20px] px-[23px] 3xl:px-[27px] lg:py-[17px] xl:py-[21px] py-[24px] 3xl:py-[28px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcCircleBorder25",
    "RoundedBorder15",
    "CustomBorderBL25",
  ]),
  variant: PropTypes.oneOf([
    "srcFillGray102",
    "OutlineGray300",
    "GradientWhiteA70026WhiteA70026",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder15",
  variant: "OutlineGray300",
  size: "smSrc",
};

export { Input };
