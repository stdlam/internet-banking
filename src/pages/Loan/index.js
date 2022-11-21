import React from "react";

import { Row, Column, Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LoanPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
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
                  <Row className="items-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[98%]">
                    <Img
                      src="images/img_file.svg"
                      className="transferOne"
                      alt="file"
                    />
                    <Text className="rowuser" as="h5" variant="h5">
                      Credit Cards
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[68%]">
                  <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img
                    src="images/img_question_25X25.svg"
                    className="home"
                    alt="question"
                  />
                  <Text className="rowrectangleseventeen" as="h5" variant="h5">
                    Loans
                  </Text>
                </Row>
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[80%]">
                  <Row className="items-start w-[75%]">
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
        <Column className="items-center justify-start w-[83%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Text className="Header" as="h1" variant="h1">
              Loan
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
          <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
            <List
              className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-4 min-h-[auto] w-[100%]"
              orientation="horizontal"
            >
              <Row className="listinfo">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center ml-[2px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_user_70X70.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="user One"
                  />
                </Button>
                <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]">
                  <Text className="columnfivehundred" variant="body1">
                    Personal Loans
                  </Text>
                  <Text
                    className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    $50,000
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center my-[4px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_bag.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="bag"
                  />
                </Button>
                <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[60%]">
                  <Text className="columnfivehundred" variant="body1">
                    Corporate Loans
                  </Text>
                  <Text
                    className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    $100,000
                  </Text>
                </Column>
              </Row>
              <Row className="justify-center listinfo">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center ml-[1px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_graph1.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="graphOne"
                  />
                </Button>
                <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mr-[1px] w-[58%]">
                  <Text className="columnfivehundred" variant="body1">
                    Business Loans
                  </Text>
                  <Text
                    className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    $500,000
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center my-[4px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  size="xlIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_airplane.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="airplane"
                  />
                </Button>
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[62%]">
                  <Text className="columnfivehundred" variant="body1">
                    Custom Loans
                  </Text>
                  <Text
                    className="font-normal xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Choose Money
                  </Text>
                </Column>
              </Row>
            </List>
            <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
              <Text className="text-bluegray_900 w-[auto]" as="h3" variant="h3">
                Active Loans Overview
              </Text>
              <Column className="bg-white_A700 justify-end lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius25 w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[98%]"
                  orientation="vertical"
                >
                  <Column className="justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
                    <Row className="items-start w-[93%]">
                      <Text
                        className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mt-[3px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Loan Money
                      </Text>
                      <Text
                        className="lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] Description"
                        variant="body1"
                      >
                        Left to repay
                      </Text>
                      <Text
                        className="font-medium lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Duration
                      </Text>
                      <Text
                        className="font-medium 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] mt-[1px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Interest rate
                      </Text>
                      <Text
                        className="font-medium lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] mt-[1px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Installment
                      </Text>
                      <Text
                        className="font-medium 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] mt-[3px] text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Repay
                      </Text>
                    </Row>
                    <Line className="bg-gray_101 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        01.
                      </Text>
                      <Text
                        className="lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] One"
                        variant="body1"
                      >
                        $100,000
                      </Text>
                      <Text
                        className="3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] One"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text className="duration_One" variant="body1">
                        8 Months
                      </Text>
                      <Text className="Twelve1" variant="body1">
                        12%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $2,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        02.
                      </Text>
                      <Text className="price_Four4" variant="body1">
                        $500,000
                      </Text>
                      <Text
                        className="3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] One"
                        variant="body1"
                      >
                        $250,000
                      </Text>
                      <Text
                        className="2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] One"
                        variant="body1"
                      >
                        36 Months
                      </Text>
                      <Text
                        className="3xl:ml-[106px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] One"
                        variant="body1"
                      >
                        10%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $8,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        03.
                      </Text>
                      <Text className="price_Four4" variant="body1">
                        $900,000
                      </Text>
                      <Text
                        className="3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] One"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text className="duration_One" variant="body1">
                        12 Months
                      </Text>
                      <Text
                        className="3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] One"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $5,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        04.
                      </Text>
                      <Text className="price_Four4" variant="body1">
                        $50,000
                      </Text>
                      <Text className="price_One_Three" variant="body1">
                        $40,500
                      </Text>
                      <Text className="duration_One" variant="body1">
                        25 Months
                      </Text>
                      <Text
                        className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] One"
                        variant="body1"
                      >
                        5%
                      </Text>
                      <Text
                        className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] One"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        05.
                      </Text>
                      <Text className="price_Seven1" variant="body1">
                        $50,000
                      </Text>
                      <Text className="price_One_Three" variant="body1">
                        $40,500
                      </Text>
                      <Text className="duration_One" variant="body1">
                        5 Months
                      </Text>
                      <Text className="Twelve1" variant="body1">
                        16%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $10,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        06.
                      </Text>
                      <Text className="price_Seven1" variant="body1">
                        $80,000
                      </Text>
                      <Text className="price_One_Three" variant="body1">
                        $25,500
                      </Text>
                      <Text
                        className="2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[78px] xl:ml-[97px] One"
                        variant="body1"
                      >
                        14 Months
                      </Text>
                      <Text
                        className="3xl:ml-[109px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[91px] One"
                        variant="body1"
                      >
                        8%
                      </Text>
                      <Text
                        className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] One"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        07.
                      </Text>
                      <Text
                        className="lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] One"
                        variant="body1"
                      >
                        $12,000
                      </Text>
                      <Text
                        className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] One"
                        variant="body1"
                      >
                        $5,500
                      </Text>
                      <Text
                        className="xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] One"
                        variant="body1"
                      >
                        9 Months
                      </Text>
                      <Text className="Twelve1" variant="body1">
                        13%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $500 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_104 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                  <Column className="transaction">
                    <Row className="items-center rounded-radius175 w-[98%]">
                      <Text className="One" variant="body1">
                        08.
                      </Text>
                      <Text className="price_Seven1" variant="body1">
                        $160,000
                      </Text>
                      <Text
                        className="3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] One"
                        variant="body1"
                      >
                        $100,800
                      </Text>
                      <Text
                        className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[90px] One"
                        variant="body1"
                      >
                        3 Months
                      </Text>
                      <Text className="Twelve1" variant="body1">
                        12%
                      </Text>
                      <Text className="price_Two3" variant="body1">
                        $900 / month
                      </Text>
                      <Button
                        className="font-medium lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </Row>
                    <Line className="bg-gray_101 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                  </Column>
                </List>
                <Row className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[83%]">
                  <Text
                    className="font-medium text-red_700 w-[auto]"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-medium lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $125,0000
                  </Text>
                  <Text
                    className="font-medium 3xl:ml-[102px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[85px] text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $750,000
                  </Text>
                  <Text
                    className="font-medium lg:ml-[296px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $50,000 / month
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default LoanPage;
