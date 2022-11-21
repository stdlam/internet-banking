import React from "react";

import {
  Column,
  Row,
  Stack,
  Line,
  Text,
  Input,
  Img,
  Button,
  Switch,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const SettingPageThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[17%]">
            <Line className="absolute bg-gray_101 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] right-[0] w-[1px]" />
            <Sidebar className="absolute w-[100%]" />
          </Stack>
          <Column className="items-center justify-start w-[83%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="Header" as="h1" variant="h1">
                Services
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[482px] 3xl:ml-[578px] flex lg:ml-[342px] w-[22%] xl:ml-[428px]"
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
            <Column className="bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[93%]">
              <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[39%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Edit Profile
                  </Text>
                  <Text
                    className="font-medium lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Preferences
                  </Text>
                  <Column className="items-center justify-start lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] w-[28%]">
                    <Text
                      className="font-medium text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      Security
                    </Text>
                    <Line className="bg-indigo_600 h-[3px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                  </Column>
                </Row>
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </Column>
              <Column className="justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[38%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Two-factor Authentication
                </Text>
                <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Switch value={true} className="w-[14%]" />
                  <Text className="rowgroup269" variant="body1">
                    Enable or disable two factor authentication
                  </Text>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius15 w-[49%]">
                <Text
                  className="font-medium text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Change Password
                </Text>
                <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius15 w-[100%]">
                  <Text className="columnfivehundred" variant="body1">
                    Current Password
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_900 Group195"
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                    name="Group195"
                    placeholder="Charlene@123"
                    size="md"
                  ></Input>
                </Column>
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius15 w-[100%]">
                  <Text className="columnfivehundred" variant="body1">
                    New Password
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_900 Group195"
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                    name="Group195 One"
                    placeholder="Charlene@123"
                    size="md"
                  ></Input>
                </Column>
              </Column>
              <Button
                className="font-medium 3xl:ml-[1032px] lg:ml-[611px] xl:ml-[765px] 2xl:ml-[860px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[18%]"
                shape="RoundedBorder15"
                size="md"
                variant="FillIndigo600"
              >
                Save
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingPageThreePage;
