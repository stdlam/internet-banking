import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Line,
  Stack,
  Input,
  Button,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ServicesPage = () => {
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
                  <Row className="items-center lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[62%]">
                    <Img
                      src="images/img_question.svg"
                      className="transferOne"
                      alt="question"
                    />
                    <Text className="rowuser" as="h5" variant="h5">
                      Loans
                    </Text>
                  </Row>
                </Column>
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                  <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                  <Img src="images/img_call.svg" className="home" alt="call" />
                  <Text className="rowrectangleseventeen" as="h5" variant="h5">
                    Services
                  </Text>
                </Row>
                <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                  <Row className="items-end w-[100%]">
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
        <Stack className="3xl:h-[1165px] lg:h-[690px] xl:h-[863px] 2xl:h-[971px] w-[83%]">
          <Line className="absolute bg-gray_101 h-[1px] top-[10%] w-[100%]" />
          <Column className="absolute items-center justify-start w-[100%]">
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
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <Row className="listinfo">
                  <Button
                    className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_location.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="location"
                    />
                  </Button>
                  <Column className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[51%]">
                    <Text
                      className="text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Life Insurance
                    </Text>
                    <Text className="date_Two" variant="body1">
                      Unlimited protection
                    </Text>
                  </Column>
                </Row>
                <Row className="listinfo">
                  <Button
                    className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_bag_70X70.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="bag"
                    />
                  </Button>
                  <Column className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[44%]">
                    <Text
                      className="text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Shopping
                    </Text>
                    <Text className="EnvestmentValu" variant="body1">
                      Buy. Think. Grow.
                    </Text>
                  </Column>
                </Row>
                <Row className="listinfo">
                  <Button
                    className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                    size="xlIcn"
                    variant="icbFillGray103"
                  >
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="checkmark"
                    />
                  </Button>
                  <Column className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[44%]">
                    <Text
                      className="text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Safety
                    </Text>
                    <Text className="EnvestmentValu" variant="body1">
                      We are your allies
                    </Text>
                  </Column>
                </Row>
              </List>
              <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Bank Services List
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]"
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
                        src="images/img_question_60X60.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="question One"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Business loans
                      </Text>
                      <Text className="date_Two" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_bag.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="bag One"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Checking accounts
                      </Text>
                      <Text className="date" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_graph1.svg"
                        className="flex items-center justify-center"
                        alt="Group"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Savings accounts
                      </Text>
                      <Text className="date" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_user_70X70.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="user One"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Debit and credit cards
                      </Text>
                      <Text className="date_Two" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_checkmark_60X60.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="checkmark One"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Life Insurance
                      </Text>
                      <Text className="date_Two" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                  <Row className="listfile_one">
                    <Button
                      className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray103"
                    >
                      <Img
                        src="images/img_question_60X60.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                        alt="question Two"
                      />
                    </Button>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Business loans
                      </Text>
                      <Text className="date_Two" variant="body2">
                        It is a long established{" "}
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text className="Designer" variant="body2">
                        Many publishing
                      </Text>
                    </Column>
                    <Button
                      className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                      shape="RoundedBorder17"
                      size="sm"
                      variant="OutlineIndigo500"
                    >
                      View Details
                    </Button>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default ServicesPage;
