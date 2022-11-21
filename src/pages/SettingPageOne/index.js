import React from "react";

import {
  Row,
  Column,
  Text,
  Input,
  Img,
  Button,
  Line,
  Stack,
  Grid,
  SelectBox,
  List,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const SettingPageOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="w-[17%]" />
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
              <Row className="items-start w-[38%]">
                <Column className="items-center justify-start w-[42%]">
                  <Text
                    className="font-medium text-indigo_600 w-[auto]"
                    variant="body1"
                  >
                    Edit Profile
                  </Text>
                  <Line className="bg-indigo_600 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[67%]" />
                </Column>
                <Text
                  className="font-medium text-bluegray_400 w-[auto]"
                  variant="body1"
                >
                  Preferences
                </Text>
                <Text
                  className="font-medium lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] mt-[1px] text-bluegray_400 w-[auto]"
                  variant="body1"
                >
                  Security
                </Text>
              </Row>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
            </Column>
            <Row className="items-start justify-between lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
              <Stack className="xl:h-[116px] 2xl:h-[131px] 3xl:h-[157px] lg:h-[93px] mt-[3px] w-[13%]">
                <Img
                  src="images/img_ellipse1.png"
                  className="absolute xl:h-[116px] 2xl:h-[131px] 3xl:h-[157px] lg:h-[93px] right-[2%] rounded-radius50 xl:w-[115px] 2xl:w-[130px] 3xl:w-[156px] lg:w-[92px]"
                  alt="EllipseTwentyEight"
                />
                <Button
                  className="absolute bottom-[12%] flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center right-[0] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  size="smIcn"
                  variant="icbFillIndigo600"
                >
                  <Img
                    src="images/img_ticket_30X30.svg"
                    className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                    alt="ticket"
                  />
                </Button>
              </Stack>
              <Column className="justify-start w-[82%]">
                <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[29px] 3xl:gap-[34px] grid grid-cols-2 w-[100%]">
                  <Column className="justify-start rounded-radius15 w-[100%]">
                    <Text className="columnfivehundred" variant="body1">
                      Your Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="language"
                      placeholder="Charlene Reed "
                      size="sm"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius15 w-[100%]">
                    <Text className="columnfivehundred" variant="body1">
                      User Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="language One"
                      placeholder="Charlene Reed "
                      size="sm"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius15 w-[100%]">
                    <Text className="columnfivehundred" variant="body1">
                      Email
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                      name="email One"
                      placeholder="charlenereed@gmail.com "
                      size="md"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius15 w-[100%]">
                    <Text className="columnfivehundred" variant="body1">
                      Password
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="password One"
                      placeholder="**********"
                      size="sm"
                    ></Input>
                  </Column>
                </Grid>
                <Row className="items-center justify-evenly lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Column className="w-[52%]">
                    <Text className="columnfivehundred" variant="body1">
                      Date of Birth
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[94%]"
                      placeholderClassName="text-bluegray_900"
                      name="date"
                      placeholder="25 January 1990"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowright_50X50.svg"
                          className="lg:w-[8px] lg:h-[5px] lg:mr-[17px] xl:w-[10px] xl:h-[6px] xl:mr-[22px] 2xl:w-[12px] 2xl:h-[7px] 2xl:mr-[25px] 3xl:w-[14px] 3xl:h-[8px] 3xl:mr-[30px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </Column>
                  <Column className="rounded-radius15 w-[48%]">
                    <Text className="columnfivehundred" variant="body1">
                      Present Address
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 Group195"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="Group195"
                      placeholder="San Jose, California, USA"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius15 w-[100%]">
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Permanent Address
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group195 One"
                        placeholder="San Jose, California, USA"
                        size="md"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        City
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                        name="Group195 One"
                        placeholder="San Jose"
                        size="sm"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] pt-[1px] rounded-radius15 w-[100%]">
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Postal Code
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="zipcode"
                        placeholder="45962"
                        size="sm"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Country
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                        name="Group195 Two"
                        placeholder="USA"
                        size="sm"
                      ></Input>
                    </Column>
                  </Row>
                </List>
                <Button
                  className="font-medium lg:ml-[480px] xl:ml-[600px] 2xl:ml-[675px] 3xl:ml-[810px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[22%]"
                  shape="RoundedBorder15"
                  size="md"
                  variant="FillIndigo600"
                >
                  Save
                </Button>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SettingPageOnePage;
