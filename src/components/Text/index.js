import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h2: "lg:text-[17px] xl:text-[22px] text-[25px] 3xl:text-[30px]",
  h3: "font-normal lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  h4: "font-normal lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h5: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h6: "lg:text-[12px] xl:text-[15px] text-[17px] 3xl:text-[20px]",
  body1: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body2: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body3: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body4: "xl:text-[11px] text-[13px] 3xl:text-[15px] lg:text-[9px]",
  body5: "font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
