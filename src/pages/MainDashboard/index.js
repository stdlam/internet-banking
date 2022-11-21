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

const MainDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <aside className="w-[17%]">
          <div className="">
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] w-[100%]">
              <Row className="items-center justify-center w-[74%]">
                <Img src="images/img_logo.png" className="LOGO" alt="LOGO" />
                <Text className="Logo" as="h2" variant="h2">
                  FirstBank
                </Text>
              </Row>
              <Column className="justify-start lg:mb-[329px] xl:mb-[411px] 2xl:mb-[463px] 3xl:mb-[555px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[91%]">
                <Row className="items-center lg:mr-[15px] xl:mr-[19px] 2xl:mr-[22px] 3xl:mr-[26px] w-[89%]">
                  <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img src="images/img_home.svg" className="home" alt="home" />
                  <Text className="rowrectangleseventeen" as="h5" variant="h5">
                    Dashboard
                  </Text>
                </Row>
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                  <Row className="items-start w-[98%]">
                    <Img
                      src="images/img_transfer1.svg"
                      className="transferOne"
                      alt="transferOne"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Transactions
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[79%]">
                    <Img
                      src="images/img_user.svg"
                      className="transferOne"
                      alt="user"
                    />
                    <Text className="rowuser" as="h5" variant="h5">
                      Accounts
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[94%]">
                    <Img
                      src="images/img_map.svg"
                      className="transferOne"
                      alt="map"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Investments
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
                    <Img
                      src="images/img_file.svg"
                      className="transferOne"
                      alt="file"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Credit Cards
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[60%]">
                    <Img
                      src="images/img_question.svg"
                      className="transferOne"
                      alt="question"
                    />
                    <Text className="rowuser" as="h5" variant="h5">
                      Loans
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[75%]">
                    <Img
                      src="images/img_service1.svg"
                      className="transferOne"
                      alt="serviceOne"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Services
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="transferOne"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" as="h5" variant="h5">
                      My Privileges
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[66%]">
                    <Img
                      src="images/img_settings.svg"
                      className="transferOne"
                      alt="settings"
                    />
                    <Text className="rowlightbulb" as="h5" variant="h5">
                      Setting
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </div>
        </aside>
        <Line className="bg-gray_101 xl:h-[1054px] 2xl:h-[1185px] 3xl:h-[1422px] lg:h-[842px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="Header" as="h1" variant="h1">
              Overview
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[471px] 3xl:ml-[565px] flex lg:ml-[334px] w-[22%] xl:ml-[418px]"
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
          <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[93%]">
            <Row className="items-center justify-evenly pt-[2px] w-[100%]">
              <Column className="items-center w-[68%]">
                <Row className="items-start justify-between w-[96%]">
                  <Text
                    className="mt-[1px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Cards
                  </Text>
                  <Text
                    className="font-normal text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    See All
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
                  <Column className="bg-indigo_600 items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                    <Column className="justify-start w-[86%]">
                      <Row className="items-start justify-evenly w-[100%]">
                        <Column className="justify-start mt-[2px] w-[89%]">
                          <Text
                            className="font-lato not-italic text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Balance
                          </Text>
                          <Text
                            className="font-inter price1"
                            as="h4"
                            variant="h4"
                          >
                            $5,756
                          </Text>
                        </Column>
                        <Img
                          src="images/img_chipcard.png"
                          className="ChipCard"
                          alt="ChipCard"
                        />
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[75%]">
                        <Column className="w-[69%]">
                          <Text
                            className="not-italic text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            CARD HOLDER
                          </Text>
                          <Text className="EddyCusuma" variant="body2">
                            Eddy Cusuma
                          </Text>
                        </Column>
                        <Column className="w-[31%]">
                          <Text
                            className="not-italic text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            VALID THRU
                          </Text>
                          <Text className="EddyCusuma" variant="body2">
                            12/22
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Input
                      className="placeholder:text-white_A700 Group319"
                      wrapClassName="2xl:mt-[33px] 3xl:mt-[39px] flex lg:mt-[23px] w-[100%] xl:mt-[29px]"
                      name="Group319"
                      placeholder="3778 **** **** 1234"
                      suffix={
                        <Img
                          src="images/img_contrast.svg"
                          className="mr-[1px] lg:w-[31px] lg:ml-[24px] xl:w-[39px] xl:ml-[31px] 2xl:w-[44px] 2xl:ml-[35px] 3xl:w-[52px] 3xl:ml-[42px] my-[auto]"
                          alt="contrast"
                        />
                      }
                      shape="CustomBorderBL25"
                      size="lg"
                      variant="GradientWhiteA70026WhiteA70026"
                    ></Input>
                  </Column>
                  <Column className="bg-indigo_500 items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                    <Column className="justify-start w-[86%]">
                      <Row className="items-start justify-evenly w-[100%]">
                        <Column className="justify-start mt-[2px] w-[89%]">
                          <Text
                            className="font-lato not-italic text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Balance
                          </Text>
                          <Text
                            className="font-inter price1"
                            as="h4"
                            variant="h4"
                          >
                            $5,756
                          </Text>
                        </Column>
                        <Img
                          src="images/img_chipcard.png"
                          className="ChipCard"
                          alt="ChipCard One"
                        />
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[75%]">
                        <Column className="w-[69%]">
                          <Text
                            className="not-italic text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            CARD HOLDER
                          </Text>
                          <Text className="EddyCusuma" variant="body2">
                            Eddy Cusuma
                          </Text>
                        </Column>
                        <Column className="w-[31%]">
                          <Text
                            className="not-italic text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            VALID THRU
                          </Text>
                          <Text className="EddyCusuma" variant="body2">
                            12/22
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Input
                      className="placeholder:text-white_A700 Group319"
                      wrapClassName="2xl:mt-[33px] 3xl:mt-[39px] flex lg:mt-[23px] w-[100%] xl:mt-[29px]"
                      name="Group319 One"
                      placeholder="3778 **** **** 1234"
                      suffix={
                        <Img
                          src="images/img_contrast.svg"
                          className="mr-[1px] lg:w-[31px] lg:ml-[24px] xl:w-[39px] xl:ml-[31px] 2xl:w-[44px] 2xl:ml-[35px] 3xl:w-[52px] 3xl:ml-[42px] my-[auto]"
                          alt="contrast"
                        />
                      }
                      shape="CustomBorderBL25"
                      size="lg"
                      variant="GradientWhiteA70026WhiteA70026"
                    ></Input>
                  </Column>
                </Row>
              </Column>
              <Column className="w-[32%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Recent Transaction
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[5px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                        alt="videocamera"
                      />
                    </Button>
                    <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[55%]">
                      <Text
                        className="font-medium text-bluegray_600 w-[auto]"
                        variant="body1"
                      >
                        Deposit from my Card
                      </Text>
                      <Text className="date" variant="body2">
                        28 January 2021
                      </Text>
                    </Column>
                    <Text
                      className="font-medium xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-red_700 w-[auto]"
                      variant="body1"
                    >
                      -$850
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_link.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                        alt="link"
                      />
                    </Button>
                    <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[49%]">
                      <Text
                        className="font-medium text-bluegray_600 w-[auto]"
                        variant="body1"
                      >
                        Deposit Paypal
                      </Text>
                      <Text className="date" variant="body2">
                        25 January 2021
                      </Text>
                    </Column>
                    <Text className="rowlink" variant="body1">
                      +$2,500
                    </Text>
                  </Row>
                  <Row className="items-center mb-[5px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center rounded-radius50 lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                        alt="clock"
                      />
                    </Button>
                    <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[48%]">
                      <Text
                        className="font-medium text-bluegray_600 w-[auto]"
                        variant="body1"
                      >
                        Jemi Wilson
                      </Text>
                      <Text className="date_Two" variant="body2">
                        21 January 2021
                      </Text>
                    </Column>
                    <Text className="rowlink" variant="body1">
                      +$5,400
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
              <Column className="w-[68%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Weekly Activity
                </Text>
                <Column className="bg-white_A700 items-end justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius25 w-[96%]">
                  <Row className="items-start justify-end ml-[auto] w-[29%]">
                    <Row className="items-start w-[38%]">
                      <div className="bg-indigo_200 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text
                        className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] columnfivehundred"
                        variant="body2"
                      >
                        Diposit
                      </Text>
                    </Row>
                    <Row className="items-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[47%]">
                      <div className="bg-indigo_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                      <Text
                        className="mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] columnfivehundred"
                        variant="body2"
                      >
                        Withdraw
                      </Text>
                    </Row>
                  </Row>
                  <Column className="justify-start mr-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] pt-[3px] w-[99%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="w-[4%]">
                        <Text className="columnfivehundred" variant="body4">
                          500
                        </Text>
                        <Text
                          className="ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] columnfivehundred"
                          variant="body4"
                        >
                          400
                        </Text>
                        <Text
                          className="ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] columnfivehundred"
                          variant="body4"
                        >
                          300
                        </Text>
                        <Text
                          className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] columnfivehundred"
                          variant="body4"
                        >
                          200
                        </Text>
                        <Text
                          className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] columnfivehundred"
                          variant="body4"
                        >
                          100
                        </Text>
                        <Text
                          className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] columnfivehundred"
                          variant="body4"
                        >
                          0
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group899.svg"
                        className="lg:h-[133px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] w-[95%]"
                        alt="Group899"
                      />
                    </Row>
                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[84%]">
                      <Text className="Sat" variant="body4">
                        Sat
                      </Text>
                      <Text
                        className="lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] Sat"
                        variant="body4"
                      >
                        Sun
                      </Text>
                      <Text
                        className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] Dec"
                        variant="body4"
                      >
                        Mon
                      </Text>
                      <Text
                        className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] Dec"
                        variant="body4"
                      >
                        Tue
                      </Text>
                      <Text
                        className="lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] Dec"
                        variant="body4"
                      >
                        Wed
                      </Text>
                      <Text
                        className="lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] Dec"
                        variant="body4"
                      >
                        Thu
                      </Text>
                      <Text
                        className="lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] Sep"
                        variant="body4"
                      >
                        Fri
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Expense Statistics
                </Text>
                <Stack className="bg-white_A700 lg:h-[229px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:px-[22px] xl:px-[27px] 2xl:px-[31px] 3xl:px-[37px] rounded-radius25 w-[100%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center justify-start left-[9%] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] top-[0] w-[53%]"
                    style={{
                      backgroundImage: "url('images/img_group900.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] text-center text-white_A700 w-[76%]"
                      variant="body4"
                    >
                      <span className="text-white_A700 font-inter font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        30%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                        Entertainment
                      </span>
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[3%] items-center justify-start left-[3%] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[31%]"
                    style={{
                      backgroundImage: "url('images/img_group903.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[44px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] text-center text-white_A700 w-[97%]"
                      variant="body4"
                    >
                      <span className="text-white_A700 font-inter font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        20%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                        Investment
                      </span>
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat items-end justify-end 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[2%] top-[9%] w-[41%]"
                    style={{
                      backgroundImage: "url('images/img_group901.svg')",
                    }}
                  >
                    <Text
                      className="font-medium lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] text-center text-white_A700 w-[61%]"
                      variant="body4"
                    >
                      <span className="text-white_A700 font-inter font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        15%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                        Bill Expense
                      </span>
                    </Text>
                  </Column>
                  <Column className="absolute bg-indigo_200 bottom-[0] xl:h-[106px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[85px] items-center justify-start lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] right-[12%] xl:w-[105px] 2xl:w-[119px] 3xl:w-[142px] lg:w-[84px]">
                    <Text
                      className="font-medium lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[28px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[48px] text-center text-white_A700 w-[66%]"
                      variant="body4"
                    >
                      <span className="text-white_A700 font-inter font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        35%
                        <br />
                      </span>
                      <span className="text-white_A700 font-inter font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                        Others
                      </span>
                    </Text>
                  </Column>
                </Stack>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] w-[100%]">
              <Column className="w-[43%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Quick Transfer
                </Text>
                <Column className="bg-white_A700 items-center justify-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[94%]">
                  <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[79%]">
                      <List
                        className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[67%]"
                        orientation="horizontal"
                      >
                        <Column className="items-center justify-start pb-[3px] w-[100%]">
                          <Img
                            src="images/img_ellipse18.png"
                            className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                            alt="EllipseEighteen"
                          />
                          <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                            <Text
                              className="font-bold text-indigo_700 w-[auto]"
                              variant="body1"
                            >
                              Livia Bator
                            </Text>
                            <Text
                              className="font-bold lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_400 w-[auto]"
                              variant="body2"
                            >
                              CEO
                            </Text>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start pb-[3px] w-[100%]">
                          <Img
                            src="images/img_ellipse19.png"
                            className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                            alt="EllipseNineteen"
                          />
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 w-[auto]"
                              variant="body1"
                            >
                              Randy Press
                            </Text>
                            <Text
                              className="mt-[4px] columnfivehundred"
                              variant="body2"
                            >
                              Director
                            </Text>
                          </Column>
                        </Column>
                      </List>
                      <Column className="items-center w-[23%]">
                        <Img
                          src="images/img_ellipse17.png"
                          className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                          alt="EllipseSeventeen"
                        />
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 w-[auto]"
                            variant="body1"
                          >
                            Workman
                          </Text>
                          <Text className="Designer" variant="body2">
                            Designer
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                      size="mdIcn"
                      variant="icbOutlineGray300cc"
                    >
                      <Img
                        src="images/img_arrowright_50X50.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                  <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                    <Text className="columnfivehundred" variant="body1">
                      Write Amount
                    </Text>
                    <Row className="bg-gray_103 items-center justify-between lg:pl-[21px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] rounded-radius25 w-[67%]">
                      <Text
                        className="font-bold text-indigo_700 w-[auto]"
                        variant="body1"
                      >
                        525.50
                      </Text>
                      <Button
                        className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[53%]"
                        shape="CircleBorder25"
                        size="md"
                        variant="OutlineGray300cc"
                      >
                        Send
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
              <Column className="w-[57%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Balance History
                </Text>
                <Stack className="bg-white_A700 lg:h-[197px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius25 w-[100%]">
                  <Column className="absolute bottom-[3%] inset-x-[0] justify-start mx-[auto] w-[78%]">
                    <Row className="items-center ml-[1px] w-[95%]">
                      <Img
                        src="images/img_group.svg"
                        className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[1px]"
                        alt="Group"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="Group_One"
                        alt="Group One"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="Group_One"
                        alt="Group Two"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="Group_One"
                        alt="Group Three"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] w-[1px]"
                        alt="Group Four"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="Group_One"
                        alt="Group Five"
                      />
                      <Img
                        src="images/img_group.svg"
                        className="Group_One"
                        alt="Group Six"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Text className="Sat" variant="body3">
                        Jul
                      </Text>
                      <Text className="Sat" variant="body3">
                        Aug
                      </Text>
                      <Text className="Sep" variant="body3">
                        Sep
                      </Text>
                      <Text className="Sep" variant="body3">
                        Oct
                      </Text>
                      <Text className="Sat" variant="body3">
                        Nov{" "}
                      </Text>
                      <Text className="Dec" variant="body3">
                        Dec
                      </Text>
                      <Text className="Sat" variant="body3">
                        Jan
                      </Text>
                    </Row>
                  </Column>
                  <Column className="absolute justify-start left-[0] pl-[4px] top-[4%] w-[7%]">
                    <Row className="items-center justify-between ml-[auto] w-[95%]">
                      <Text className="columnfivehundred" variant="body4">
                        800
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[95%]">
                      <Text className="columnfivehundred" variant="body4">
                        600
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[97%]">
                      <Text className="columnfivehundred" variant="body4">
                        400
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[95%]">
                      <Text className="columnfivehundred" variant="body4">
                        200
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[16%]"></div>
                    </Row>
                    <Row className="items-end justify-end ml-[auto] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[56%]">
                      <Text
                        className="not-italic text-bluegray_400 w-[auto]"
                        variant="body5"
                      >
                        0
                      </Text>
                      <div className="bg-bluegray_400 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[27%]"></div>
                    </Row>
                  </Column>
                  <Stack
                    className="absolute bg-cover bg-repeat lg:h-[132px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] right-[1%] top-[5%] w-[86%]"
                    style={{
                      backgroundImage: "url('images/img_group417.svg')",
                    }}
                  >
                    <Img
                      src="images/img_vector.png"
                      className="absolute lg:h-[126px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] top-[1%] w-[100%]"
                      alt="Vector Five"
                    />
                  </Stack>
                </Stack>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MainDashboardPage;
