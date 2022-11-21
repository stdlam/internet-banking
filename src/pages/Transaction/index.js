import React from "react";

import {
  Row,
  Stack,
  Line,
  Column,
  Img,
  Text,
  Input,
  Button,
  Slider,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const TransactionPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[17%]">
          <Line className="absolute bg-gray_101 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] right-[0] w-[1px]" />
          <aside className="absolute w-[100%]">
            <div className="">
              <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] w-[100%]">
                <Row className="items-center justify-center w-[74%]">
                  <Img src="images/img_logo.png" className="LOGO" alt="LOGO" />
                  <Text className="Logo" as="h2" variant="h2">
                    FirstBank
                  </Text>
                </Row>
                <Column className="justify-start lg:mb-[221px] xl:mb-[277px] 2xl:mb-[312px] 3xl:mb-[374px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[91%]">
                  <Row className="items-start justify-end ml-[auto] w-[69%]">
                    <Img
                      src="images/img_home_25X25.svg"
                      className="transferOne"
                      alt="home"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[98%]">
                    <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <Img
                      src="images/img_file_25X25.svg"
                      className="transferOne"
                      alt="file"
                    />
                    <Text
                      className="font-medium text-indigo_600 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Transactions
                    </Text>
                  </Row>
                  <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                    <Row className="items-center w-[79%]">
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
                        alt="file One"
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
        </Stack>
        <Stack className="2xl:h-[1001px] 3xl:h-[1201px] lg:h-[712px] xl:h-[890px] w-[83%]">
          <Line className="absolute bg-gray_101 h-[1px] top-[10%] w-[100%]" />
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="Header" as="h1" variant="h1">
                Transactions
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[424px] 3xl:ml-[509px] flex lg:ml-[301px] w-[22%] xl:ml-[377px]"
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
              <Row className="items-center justify-evenly lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
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
                      + Add Card
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
                    <Column className="bg-indigo_600 items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[48%]">
                      <Column className="justify-start w-[86%]">
                        <Row className="items-start justify-evenly w-[100%]">
                          <Column className="justify-start mt-[3px] w-[89%]">
                            <Text
                              className="not-italic text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text className="price1" as="h4" variant="h4">
                              $5,756
                            </Text>
                          </Column>
                          <Img
                            src="images/img_chipcard.png"
                            className="ChipCard"
                            alt="ChipCard"
                          />
                        </Row>
                        <Row className="items-center ml-[2px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[75%]">
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
                          <Column className="justify-start mt-[3px] w-[89%]">
                            <Text
                              className="not-italic text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text className="price1" as="h4" variant="h4">
                              $5,756
                            </Text>
                          </Column>
                          <Img
                            src="images/img_chipcard.png"
                            className="ChipCard"
                            alt="ChipCard One"
                          />
                        </Row>
                        <Row className="items-center ml-[2px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[75%]">
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
                <Column className="mt-[1px] w-[32%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Expense
                  </Text>
                  <Row className="bg-white_A700 items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius25 w-[100%]">
                    <Column className="items-center justify-start ml-[1px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius10 w-[12%]">
                      <div className="bg-gray_103 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] rounded-radius10 w-[100%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Aug
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius10 w-[12%]">
                      <div className="bg-gray_103 lg:h-[101px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[171px] rounded-radius10 w-[100%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Sep
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] rounded-radius10 w-[12%]">
                      <div className="bg-gray_103 3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] rounded-radius10 w-[100%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Oct
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[80px] rounded-radius10 w-[12%]">
                      <div className="bg-gray_103 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] rounded-radius10 w-[100%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Nov
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] rounded-radius10 w-[18%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        variant="body3"
                      >
                        $12,500
                      </Text>
                      <div className="bg-indigo_600 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius10 w-[67%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Dec
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] rounded-radius10 w-[12%]">
                      <div className="bg-gray_103 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] rounded-radius10 w-[100%]"></div>
                      <Text className="columnrectanglefiftysix" variant="body4">
                        Jan
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Column className="items-end justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Recent Transactions
                  </Text>
                  <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                    <Row className="items-start w-[38%]">
                      <Column className="items-center justify-start w-[51%]">
                        <Text
                          className="font-medium text-blue_A700 w-[auto]"
                          variant="body1"
                        >
                          All Transactions
                        </Text>
                        <Line className="bg-blue_A700 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[67%]" />
                      </Column>
                      <Text
                        className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Income
                      </Text>
                      <Text
                        className="font-medium lg:ml-[58px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] mt-[3px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Expense
                      </Text>
                    </Row>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Slider
                  slidesToShow={4}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00]"
                  ref={sliderRef}
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Column className="bg-white_A700 items-center justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius25 w-[100%]">
                        <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                          <Row className="items-start w-[96%]">
                            <Text className="Description" variant="body1">
                              Description
                            </Text>
                            <Text className="TransactionID" variant="body1">
                              Transaction ID
                            </Text>
                            <Text className="Type" variant="body1">
                              Type
                            </Text>
                            <Text className="Card" variant="body1">
                              Card
                            </Text>
                            <Text className="Date" variant="body1">
                              Date
                            </Text>
                            <Text className="Amount" variant="body1">
                              Amount
                            </Text>
                            <Text className="Receipt" variant="body1">
                              Receipt
                            </Text>
                          </Row>
                          <Line className="bg-gray_300 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <List
                          className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]"
                          orientation="vertical"
                        >
                          <Column className="transaction">
                            <Row className="items-end w-[100%]">
                              <Button
                                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center my-[2px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                size="smIcn"
                                variant="icbOutlineRed700"
                              >
                                <Img
                                  src="images/img_arrow.svg"
                                  className="flex items-center justify-center"
                                  alt="Arrow"
                                />
                              </Button>
                              <Text className="SpotifySubscri" variant="body1">
                                Spotify Subscription
                              </Text>
                              <Text className="test_12548796" variant="body1">
                                #12548796
                              </Text>
                              <Text className="Shopping" variant="body1">
                                Shopping
                              </Text>
                              <Text className="test_1234" variant="body1">
                                1234 ****
                              </Text>
                              <Text className="time" variant="body1">
                                28 Jan, 12.30 AM
                              </Text>
                              <Text className="price_Three" variant="body1">
                                -$2,500
                              </Text>
                              <Button
                                className="font-normal lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </Row>
                            <Line className="bg-gray_104 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          </Column>
                          <Column className="transaction">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                size="smIcn"
                                variant="icbOutlineGreen600"
                              >
                                <Img
                                  src="images/img_arrow_30X30.svg"
                                  className="flex items-center justify-center"
                                  alt="Arrow One"
                                />
                              </Button>
                              <Text className="FreepikSales" variant="body1">
                                Freepik Sales
                              </Text>
                              <Text
                                className="test_12548796_One"
                                variant="body1"
                              >
                                #12548796
                              </Text>
                              <Text className="Transfer" variant="body1">
                                Transfer
                              </Text>
                              <Text className="test_1234_One" variant="body1">
                                1234 ****
                              </Text>
                              <Text className="time_One" variant="body1">
                                25 Jan, 10.40 PM
                              </Text>
                              <Text className="price_Four" variant="body1">
                                +$750
                              </Text>
                              <Button
                                className="font-normal lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </Row>
                            <Line className="bg-gray_104 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          </Column>
                          <Column className="transaction">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                size="smIcn"
                                variant="icbOutlineRed700"
                              >
                                <Img
                                  src="images/img_arrow.svg"
                                  className="flex items-center justify-center"
                                  alt="Arrow Two"
                                />
                              </Button>
                              <Text className="FreepikSales" variant="body1">
                                Mobile Service
                              </Text>
                              <Text
                                className="test_12548796_Two"
                                variant="body1"
                              >
                                #12548796
                              </Text>
                              <Text className="Transfer" variant="body1">
                                Service
                              </Text>
                              <Text className="test_1234_Two" variant="body1">
                                1234 ****
                              </Text>
                              <Text className="time_One" variant="body1">
                                20 Jan, 10.40 PM
                              </Text>
                              <Text className="price_Five" variant="body1">
                                -$150
                              </Text>
                              <Button
                                className="font-normal lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </Row>
                            <Line className="bg-gray_104 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          </Column>
                          <Column className="transaction">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                size="smIcn"
                                variant="icbOutlineRed700"
                              >
                                <Img
                                  src="images/img_arrow.svg"
                                  className="flex items-center justify-center"
                                  alt="Arrow Three"
                                />
                              </Button>
                              <Text className="FreepikSales" variant="body1">
                                Wilson
                              </Text>
                              <Text
                                className="test_12548796_Three"
                                variant="body1"
                              >
                                #12548796
                              </Text>
                              <Text className="Transfer" variant="body1">
                                Transfer
                              </Text>
                              <Text className="test_1234_One" variant="body1">
                                1234 ****
                              </Text>
                              <Text className="time_One" variant="body1">
                                15 Jan, 03.29 PM
                              </Text>
                              <Text className="price_Five" variant="body1">
                                -$1050
                              </Text>
                              <Button
                                className="font-normal lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </Row>
                            <Line className="bg-gray_104 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                          </Column>
                          <Column className="transaction">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                size="smIcn"
                                variant="icbOutlineGreen600"
                              >
                                <Img
                                  src="images/img_arrow_30X30.svg"
                                  className="flex items-center justify-center"
                                  alt="Arrow Four"
                                />
                              </Button>
                              <Text className="FreepikSales" variant="body1">
                                Emilly
                              </Text>
                              <Text
                                className="test_12548796_Four"
                                variant="body1"
                              >
                                #12548796
                              </Text>
                              <Text className="Transfer" variant="body1">
                                Transfer
                              </Text>
                              <Text className="test_1234_One" variant="body1">
                                1234 ****
                              </Text>
                              <Text className="time_One" variant="body1">
                                14 Jan, 10.40 PM
                              </Text>
                              <Text className="price_Seven" variant="body1">
                                +$840
                              </Text>
                              <Button
                                className="font-normal lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </Row>
                            <Line className="bg-gray_104 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                          </Column>
                        </List>
                      </Column>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Row className="items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[29%]">
                  <Row className="items-start justify-evenly w-[28%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="cursor-pointer lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      onClick={() => sliderRef.current?.slidePrev()}
                      alt="arrowleft"
                    />
                    <Text
                      className="font-medium mt-[2px] text-indigo_600 w-[auto]"
                      variant="body2"
                    >
                      Previous
                    </Text>
                  </Row>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center LOGO"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillIndigo600"
                  >
                    1
                  </Button>
                  <Text
                    className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] text-indigo_600 w-[auto]"
                    variant="body2"
                  >
                    2
                  </Text>
                  <Text
                    className="font-medium lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] text-indigo_600 w-[auto]"
                    variant="body2"
                  >
                    3
                  </Text>
                  <Text
                    className="font-medium lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] text-indigo_600 w-[auto]"
                    variant="body2"
                  >
                    4
                  </Text>
                  <Row className="items-center justify-evenly lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[19%]">
                    <Text
                      className="font-medium text-indigo_600 w-[auto]"
                      variant="body2"
                    >
                      Next
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="cursor-pointer lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      onClick={() => sliderRef.current?.slideNext()}
                      alt="arrowright"
                    />
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default TransactionPage;
