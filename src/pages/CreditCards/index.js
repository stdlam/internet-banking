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
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const CreditCardsPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

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
              <Column className="justify-start lg:mb-[438px] xl:mb-[548px] 2xl:mb-[617px] 3xl:mb-[740px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[91%]">
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[78%]">
                  <Row className="items-start w-[89%]">
                    <Img
                      src="images/img_home_25X25.svg"
                      className="transferOne"
                      alt="home"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Img
                      src="images/img_transfer1.svg"
                      className="transferOne"
                      alt="transferOne"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Transactions
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[81%]">
                    <Img
                      src="images/img_user.svg"
                      className="transferOne"
                      alt="user"
                    />
                    <Text className="rowuser" as="h5" variant="h5">
                      Accounts
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
                    <Img
                      src="images/img_map.svg"
                      className="transferOne"
                      alt="map"
                    />
                    <Text className="rowtransferone" as="h5" variant="h5">
                      Investments
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
                  <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img
                    src="images/img_file_1.svg"
                    className="transferOne"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-indigo_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Credit Cards
                  </Text>
                </Row>
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                  <Row className="items-center w-[60%]">
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
        <Line className="bg-indigo_50 xl:h-[1174px] 2xl:h-[1320px] 3xl:h-[1584px] lg:h-[938px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="Header" as="h1" variant="h1">
              Credit Cards
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[429px] 3xl:ml-[515px] flex lg:ml-[305px] w-[22%] xl:ml-[381px]"
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
          <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[93%]">
            <Column className="justify-start w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                My Cards
              </Text>
              <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Column className="bg-indigo_600 items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
                <Column className="bg-indigo_500 items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
                <Column className="bg-indigo_300 border border-gray_101 border-solid items-center lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[32%]">
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
                        alt="ChipCard Two"
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
                    name="Group319 Two"
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
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pt-[2px] w-[100%]">
              <Column className="w-[34%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card Expense Statistics
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius25 w-[92%]">
                  <Img
                    src="images/img_group346.svg"
                    className="lg:h-[133px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] mt-[2px] w-[64%]"
                    alt="Group346"
                  />
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[85%]"
                    orientation="vertical"
                  >
                    <Row className="items-start justify-between mr-[3px] lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pb-[1px] w-[99%]">
                      <Row className="items-center mt-[1px] w-[39%]">
                        <div className="bg-indigo_100 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text className="rowellipsethirtythree" variant="body2">
                          DBL Bank
                        </Text>
                      </Row>
                      <Row className="items-start mb-[1px] w-[40%]">
                        <div className="bg-indigo_500 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text className="rowellipsethirtyfour" variant="body2">
                          BRC Bank
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-start justify-between lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pb-[1px] w-[100%]">
                      <Row className="items-center mt-[1px] w-[40%]">
                        <div className="bg-indigo_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text className="rowellipsethirtythree" variant="body2">
                          ABM Bank
                        </Text>
                      </Row>
                      <Row className="items-start mb-[1px] w-[40%]">
                        <div className="bg-indigo_200 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text className="rowellipsethirtyfour" variant="body2">
                          MCP Bank
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="w-[66%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card List
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="flex items-center justify-center lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                        alt="file One"
                      />
                    </Button>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text className="Designer" variant="body2">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text className="date_One" variant="body2">
                        DBL Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text className="EnvestmentValu" variant="body2">
                        **** **** 5600
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text className="date_One" variant="body2">
                        William{" "}
                      </Text>
                    </Column>
                    <Text className="rowfile" variant="body2">
                      View Details
                    </Text>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="flex items-center justify-center lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                        alt="file Two"
                      />
                    </Button>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text className="Designer" variant="body2">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text className="EnvestmentValu" variant="body2">
                        BRC Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text className="EnvestmentValu" variant="body2">
                        **** **** 4300
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text
                        className="font-medium text-indigo_600 w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text className="date_One" variant="body2">
                        Michel
                      </Text>
                    </Column>
                    <Text className="rowfile" variant="body2">
                      View Details
                    </Text>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="flex items-center justify-center lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                        alt="file Three"
                      />
                    </Button>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[15%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text className="Designer" variant="body2">
                        Secondary
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[14%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text className="date_One" variant="body2">
                        ABM Bank
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[20%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text className="EnvestmentValu" variant="body2">
                        **** **** 7560
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[17%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] columnfivehundred"
                        variant="body2"
                      >
                        Edward
                      </Text>
                    </Column>
                    <Text className="rowfile" variant="body2">
                      View Details
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] w-[100%]">
              <Column className="w-[68%]">
                <Text
                  className="ml-[1px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Add New Card
                </Text>
                <Column className="bg-white_A700 justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[96%]">
                  <Text
                    className="font-normal lg:leading-[19px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_400 w-[93%]"
                    variant="body1"
                  >
                    Credit Card generally means a plastic card issued by
                    Scheduled Commercial Banks assigned to a Cardholder, with a
                    credit limit, that can be used to purchase goods and
                    services on credit or obtain cash advances.
                  </Text>
                  <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] rounded-radius15 w-[100%]">
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Card Type
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                        name="Group195"
                        placeholder="Classic"
                        size="sm"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Name On Card
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group195 One"
                        placeholder="My Cards"
                        size="md"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Column className="rounded-radius15 w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Card Number
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_900 Group195"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        type="password"
                        name="Group195 Two"
                        placeholder="**** **** **** ****"
                        size="sm"
                      ></Input>
                    </Column>
                    <Column className="w-[48%]">
                      <Text className="columnfivehundred" variant="body1">
                        Expiration Date
                      </Text>
                      <SelectBox
                        className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[100%]"
                        placeholderClassName="text-bluegray_900"
                        name="date"
                        placeholder="25 January 2025"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="lg:w-[17px] lg:h-[18px] lg:mr-[13px] xl:w-[21px] xl:h-[22px] xl:mr-[16px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[19px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[22px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </Column>
                  </Row>
                  <Button
                    className="font-medium lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[24%]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillIndigo600"
                  >
                    Add Card
                  </Button>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card Setting
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center lg:mr-[24px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[88%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_videocamera_60X60.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="videocamera"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[69%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Block Card
                      </Text>
                      <Text
                        className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] columnfivehundred"
                        variant="body2"
                      >
                        Instantly block your card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[22px] xl:mr-[27px] 2xl:mr-[31px] 3xl:mr-[37px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[89%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="lock"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[69%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Change Pin Code
                      </Text>
                      <Text className="date" variant="body2">
                        Choose another pin code
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="common-pointer flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      onClick={handleNavigate}
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_google_60X60.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="google"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Add to Google Pay
                      </Text>
                      <Text className="Designer" variant="body2">
                        Withdraw without any card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="maximize"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Add to Apple Pay
                      </Text>
                      <Text className="Designer" variant="body2">
                        Withdraw without any card
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[93%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="maximize One"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[70%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Add to Apple Store
                      </Text>
                      <Text className="Designer" variant="body2">
                        Withdraw without any card
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default CreditCardsPage;
