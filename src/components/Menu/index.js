import React from "react";
import {
  Row,
  Column,
  Img,
  Text,
  Line,
  Input,
  Button,
  List,
  Stack,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const Menu = (prop) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
        <Text className="Header" as="h1" variant="h1">
          Overview
        </Text>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
          wrapClassName="2xl:ml-[533px] 3xl:ml-[639px] flex lg:ml-[379px] w-[22%] xl:ml-[474px]"
          name="GroupEight"
          placeholder="Search for something"
          prefix={
            <Img
              src="images/img_search.svg"
              className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[6px] lg:mr-[10px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[13px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[9px] 2xl:mr-[15px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[10px] 3xl:mr-[18px] my-[auto]"
              alt="search"
            />
          }
          suffix={
            inputvalue?.length > 0 ? (
              <CloseSVG
                color="#888ea2"
                className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[15px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                onClick={() => setInputvalue("")}
              />
            ) : (
              ""
            )
          }
          shape="srcCircleBorder25"
          variant="srcFillGray102"
        ></Input>
        <Button
          className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
          size="mdIcn"
          variant="icbFillGray103"
        >
          <Img
            src="images/img_settings_50X50.svg"
            className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
            alt="settings One"
          />
        </Button>
        <Button
          className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
          size="mdIcn"
          variant="icbFillGray103"
        >
          <Img
            src="images/img_notification.svg"
            className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
            alt="notification"
          />
        </Button>
        <Img
          src="images/img_ellipse1.png"
          className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
          alt="EllipseOne"
        />
      </Row>
    </>
  );
};

export default Menu;
