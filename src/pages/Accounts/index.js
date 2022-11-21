import React from "react";

import { Row, Column, Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AccountsPage = () => {
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
              <Column className="justify-start lg:mb-[221px] xl:mb-[277px] 2xl:mb-[312px] 3xl:mb-[374px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[91%]">
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
                </Column>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[83%]">
                  <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img
                    src="images/img_user_25X25.svg"
                    className="home"
                    alt="user"
                  />
                  <Text className="rowrectangleseventeen" as="h5" variant="h5">
                    Accounts
                  </Text>
                </Row>
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                  <Row className="items-start w-[94%]">
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
        <Line className="bg-gray_101 2xl:h-[1063px] 3xl:h-[1276px] lg:h-[756px] xl:h-[945px] w-[1px]" />
        <Column className="items-center w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="Header" as="h1" variant="h1">
              Accounts
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="2xl:ml-[470px] 3xl:ml-[564px] flex lg:ml-[334px] w-[22%] xl:ml-[418px]"
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
          <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
            <Row className="items-center justify-between w-[100%]">
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[49%]"
                orientation="horizontal"
              >
                <Row className="listinfo">
                  <Button
                    className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_info.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="info"
                    />
                  </Button>
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[48%]">
                    <Text className="columnfivehundred" variant="body1">
                      My Balance
                    </Text>
                    <Text className="price7" as="h2" variant="h2">
                      $12,750
                    </Text>
                  </Column>
                </Row>
                <Row className="justify-center listinfo">
                  <Button
                    className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_group400.svg"
                      className="flex items-center justify-center"
                      alt="Group400"
                    />
                  </Button>
                  <Column className="lg:mx-[10px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] w-[43%]">
                    <Text className="columnfivehundred" variant="body1">
                      Income
                    </Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-indigo_600 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $5,600
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="bg-white_A700 items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[23%]">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_clock_70X70.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="clock"
                  />
                </Button>
                <Column className="lg:mx-[10px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] w-[43%]">
                  <Text className="columnfivehundred" variant="body1">
                    Expense
                  </Text>
                  <Text className="price7" as="h2" variant="h2">
                    $3,460
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[23%]">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_ticket.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="ticket"
                  />
                </Button>
                <Column className="xl:mx-[12px] 2xl:mx-[14px] 3xl:mx-[16px] lg:mx-[9px] w-[45%]">
                  <Text className="columnfivehundred" variant="body1">
                    Total Saving
                  </Text>
                  <Text className="price7" as="h2" variant="h2">
                    $7,920
                  </Text>
                </Column>
              </Row>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pt-[2px] w-[100%]">
              <Column className="w-[68%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Last Transaction
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[96%]"
                  orientation="vertical"
                >
                  <Row className="items-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_alarm.svg"
                        className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px]"
                        alt="alarm"
                      />
                    </Button>
                    <Column className="justify-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[24%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Spotify Subscription
                      </Text>
                      <Text className="Designer" variant="body2">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] columnfivehundred"
                      variant="body1"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] columnfivehundred"
                      variant="body1"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] columnfivehundred"
                      variant="body1"
                    >
                      Pending
                    </Text>
                    <Text
                      className="font-medium lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-red_700 w-[auto]"
                      variant="body1"
                    >
                      -$150
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_settings_55X55.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="settings Two"
                      />
                    </Button>
                    <Column className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[24%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Mobile Service
                      </Text>
                      <Text className="date_One" variant="body2">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] columnfivehundred"
                      variant="body1"
                    >
                      Service
                    </Text>
                    <Text
                      className="lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] columnfivehundred"
                      variant="body1"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] columnfivehundred"
                      variant="body1"
                    >
                      Completed
                    </Text>
                    <Text
                      className="font-medium lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] text-red_700 w-[auto]"
                      variant="body1"
                    >
                      -$340
                    </Text>
                  </Row>
                  <Row className="items-center lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] items-center justify-center lg:w-[39px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group326"
                      />
                    </Button>
                    <Column className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[24%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Emilly Wilson
                      </Text>
                      <Text className="Designer" variant="body2">
                        25 Jan 2021
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] columnfivehundred"
                      variant="body1"
                    >
                      Transfer
                    </Text>
                    <Text
                      className="lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] columnfivehundred"
                      variant="body1"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] columnfivehundred"
                      variant="body1"
                    >
                      Completed
                    </Text>
                    <Text
                      className="font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] text-green_600 w-[auto]"
                      variant="body1"
                    >
                      +$780
                    </Text>
                  </Row>
                </List>
              </Column>
              <Column className="items-center w-[32%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Card
                  </Text>
                  <Text
                    className="font-normal mt-[1px] text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    See All
                  </Text>
                </Row>
                <Column className="bg-indigo_600 items-center justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius25 w-[100%]">
                  <Column className="justify-start w-[85%]">
                    <Row className="items-start justify-evenly pt-[1px] w-[100%]">
                      <Column className="justify-start mt-[2px] w-[89%]">
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
                    <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[76%]">
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
                    wrapClassName="2xl:mt-[37px] 3xl:mt-[44px] flex lg:mt-[26px] w-[100%] xl:mt-[32px]"
                    name="Group1033"
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
              </Column>
            </Row>
            <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[2px] w-[100%]">
              <Column className="w-[68%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Debit & Credit Overview
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[96%]">
                  <Row className="items-center justify-between mt-[1px] w-[99%]">
                    <Text className="columnfivehundred" variant="body1">
                      <span className="text-bluegray_801 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        $7,560
                      </span>
                      <span className="text-bluegray_400 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        {" "}
                        Debited &{" "}
                      </span>
                      <span className="text-bluegray_801 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        $5,420
                      </span>
                      <span className="text-bluegray_400 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        {" "}
                        Credited in this Week
                      </span>
                    </Text>
                    <Row className="items-start justify-between pb-[2px] rounded-radius5 w-[24%]">
                      <Row className="items-start rounded-radius5 w-[40%]">
                        <div className="bg-indigo_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] rounded-radius5 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text
                          className="rowrectangleseventythree"
                          variant="body1"
                        >
                          Debit
                        </Text>
                      </Row>
                      <Row className="items-start rounded-radius5 w-[44%]">
                        <div className="bg-indigo_200 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] rounded-radius5 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                        <Text
                          className="rowrectangleseventythree"
                          variant="body1"
                        >
                          Credit
                        </Text>
                      </Row>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius10 w-[99%]">
                    <Row className="items-end justify-between w-[100%]">
                      <div className="bg-indigo_600 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[96px] 3xl:mt-[118px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 2xl:h-[107px] 3xl:h-[128px] lg:h-[76px] xl:h-[95px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 lg:h-[133px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 2xl:h-[103px] 3xl:h-[123px] lg:h-[73px] xl:h-[91px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] 3xl:mt-[114px] lg:mt-[67px] xl:mt-[84px] 2xl:mt-[95px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 lg:h-[151px] xl:h-[189px] 2xl:h-[213px] 3xl:h-[255px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] lg:h-[88px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 lg:h-[153px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[257px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] lg:mt-[91px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_600 lg:h-[128px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[215px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] rounded-radius10 w-[4%]"></div>
                      <div className="bg-indigo_200 lg:h-[154px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius10 w-[4%]"></div>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                      <Text className="Sat" variant="body3">
                        Sat
                      </Text>
                      <Text className="Sat" variant="body3">
                        Sun
                      </Text>
                      <Text className="Dec" variant="body3">
                        Mon
                      </Text>
                      <Text className="Dec" variant="body3">
                        Tue
                      </Text>
                      <Text className="Dec" variant="body3">
                        Wed
                      </Text>
                      <Text className="Dec" variant="body3">
                        Thu
                      </Text>
                      <Text className="Sep" variant="body3">
                        Fri
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="mt-[1px] w-[32%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Invoices Sent
                </Text>
                <List
                  className="bg-white_A700 gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="refresh"
                      />
                    </Button>
                    <Column className="w-[52%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Apple Store
                      </Text>
                      <Text className="date_One" variant="body2">
                        5h ago
                      </Text>
                    </Column>
                    <Text
                      className="font-bold text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      $450
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group934"
                      />
                    </Button>
                    <Column className="w-[53%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Michael
                      </Text>
                      <Text className="date_Two" variant="body2">
                        2 days ago
                      </Text>
                    </Column>
                    <Text
                      className="font-bold text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      $160
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_volume.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="volume"
                      />
                    </Button>
                    <Column className="w-[50%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Playstation
                      </Text>
                      <Text className="date_Two" variant="body2">
                        5 days ago
                      </Text>
                    </Column>
                    <Text
                      className="font-bold text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      $1085
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="Group936"
                      />
                    </Button>
                    <Column className="w-[56%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        William
                      </Text>
                      <Text className="date_Two" variant="body2">
                        10 days ago
                      </Text>
                    </Column>
                    <Text
                      className="font-bold text-indigo_600 w-[auto]"
                      variant="body1"
                    >
                      $90
                    </Text>
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

export default AccountsPage;
