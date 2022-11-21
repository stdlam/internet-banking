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

const SettingPageTwoPage = () => {
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
            <Column className="bg-white_A700 items-center justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[93%]">
              <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[37%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Edit Profile
                  </Text>
                  <Column className="items-center justify-start lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] w-[31%]">
                    <Text
                      className="font-medium text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      Preferences
                    </Text>
                    <Line className="bg-indigo_600 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[96%]" />
                  </Column>
                  <Text
                    className="font-medium lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] mt-[1px] text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Security
                  </Text>
                </Row>
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </Column>
              <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                <Row className="items-center justify-between rounded-radius15 w-[100%]">
                  <Column className="rounded-radius15 w-[49%]">
                    <Text className="columnfivehundred" variant="body1">
                      Currency
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                      name="price"
                      placeholder="USD"
                      size="sm"
                    ></Input>
                  </Column>
                  <Column className="rounded-radius15 w-[49%]">
                    <Text className="columnfivehundred" variant="body1">
                      Time Zone
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                      name="timeZone One"
                      placeholder="(GMT-12:00) International Date Line West"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[38%]">
                  <Text
                    className="font-medium text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Notification
                  </Text>
                  <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Row className="items-center w-[80%]">
                      <Switch value={true} className="w-[18%]" />
                      <Text className="rowgroup269" variant="body1">
                        I send or receive digita currency
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[66%]">
                      <Switch value={false} className="w-[21%]" />
                      <Text className="rowgroup270" variant="body1">
                        I receive merchant order
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                      <Switch value={true} className="w-[14%]" />
                      <Text className="rowgroup270" variant="body1">
                        There are recommendation for my account
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Button
                  className="font-medium 3xl:ml-[1032px] lg:ml-[611px] xl:ml-[765px] 2xl:ml-[860px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[18%]"
                  shape="RoundedBorder15"
                  size="md"
                  variant="FillIndigo600"
                >
                  Save
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingPageTwoPage;
