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
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const InvestmentsPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[17%]">
          <Line className="absolute bg-gray_101 2xl:h-[1000px] 3xl:h-[1200px] lg:h-[711px] xl:h-[889px] inset-y-[0] my-[auto] right-[0] w-[1px]" />
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
                  </Column>
                  <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[95%]">
                    <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <Img
                      src="images/img_upload.svg"
                      className="home"
                      alt="upload"
                    />
                    <Text
                      className="rowrectangleseventeen"
                      as="h5"
                      variant="h5"
                    >
                      Investments
                    </Text>
                  </Row>
                  <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[80%]">
                    <Row className="items-start w-[96%]">
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
        </Stack>
        <Stack className="3xl:h-[1169px] lg:h-[692px] xl:h-[866px] 2xl:h-[974px] w-[83%]">
          <Line className="absolute bg-gray_101 h-[1px] top-[10%] w-[100%]" />
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
              <Text className="Header" as="h1" variant="h1">
                Investments
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:ml-[433px] 3xl:ml-[519px] flex lg:ml-[307px] w-[22%] xl:ml-[385px]"
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
                      src="images/img_contrast_70X70.svg"
                      className="flex items-center justify-center lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                      alt="contrast"
                    />
                  </Button>
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[57%]">
                    <Text className="columnfivehundred" variant="body1">
                      Total Invested Amount
                    </Text>
                    <Text
                      className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $150,000
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
                      src="images/img_minimize.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="minimize"
                    />
                  </Button>
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[59%]">
                    <Text className="columnfivehundred" variant="body1">
                      Number of Investments
                    </Text>
                    <Text
                      className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      1,250
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
                      src="images/img_reply.svg"
                      className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                      alt="reply"
                    />
                  </Button>
                  <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[36%]">
                    <Text className="columnfivehundred" variant="body1">
                      Rate of Return
                    </Text>
                    <Text
                      className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-indigo_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      +5.80%
                    </Text>
                  </Column>
                </Row>
              </List>
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Yearly Total Investment
                  </Text>
                  <Row className="bg-white_A700 items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[100%]">
                    <Column className="justify-start ml-[2px] w-[11%]">
                      <Text
                        className="ml-[1px] columnfivehundred"
                        variant="body4"
                      >
                        $40,000
                      </Text>
                      <Text className="price_One2" variant="body4">
                        $30,000
                      </Text>
                      <Text
                        className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] columnfivehundred"
                        variant="body4"
                      >
                        $20,000
                      </Text>
                      <Text className="price_One2" variant="body4">
                        $10,000
                      </Text>
                      <Text
                        className="flex items-center lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] columnfivehundred"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </Column>
                    <Column className="items-center justify-start mb-[1px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[86%]">
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                      <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                        <Column className="absolute bottom-[14%] items-center justify-start w-[100%]">
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                        </Column>
                        <Img
                          src="images/img_statistics.svg"
                          className="absolute lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] left-[3%] right-[5%] w-[92%]"
                          alt="Statistics"
                        />
                      </Stack>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"></div>
                      <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                        <Text className="Dec" variant="body4">
                          2016
                        </Text>
                        <Text className="Dec" variant="body4">
                          2017
                        </Text>
                        <Text className="Dec" variant="body4">
                          2018
                        </Text>
                        <Text className="Sep" variant="body4">
                          2019
                        </Text>
                        <Text className="Dec" variant="body4">
                          2020
                        </Text>
                        <Text className="Dec" variant="body4">
                          2021
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Monthly Revenue
                  </Text>
                  <Row className="bg-white_A700 items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius25 w-[100%]">
                    <Column className="justify-start ml-[3px] w-[11%]">
                      <Text className="columnfivehundred" variant="body4">
                        $40,000
                      </Text>
                      <Text
                        className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] columnfivehundred"
                        variant="body4"
                      >
                        $30,000
                      </Text>
                      <Text className="price_One2" variant="body4">
                        $20,000
                      </Text>
                      <Text
                        className="ml-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] columnfivehundred"
                        variant="body4"
                      >
                        $10,000
                      </Text>
                      <Text
                        className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] columnfivehundred"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </Column>
                    <Column className="items-center justify-start mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[86%]">
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                      <Stack className="2xl:h-[112px] 3xl:h-[134px] lg:h-[79px] xl:h-[99px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                        <Column className="absolute items-center justify-start top-[20%] w-[100%]">
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[100%]"></div>
                          <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]"></div>
                        </Column>
                        <Img
                          src="images/img_vector6.svg"
                          className="absolute 2xl:h-[112px] 3xl:h-[134px] lg:h-[79px] xl:h-[99px] inset-x-[0] w-[99%]"
                          alt="VectorSix"
                        />
                      </Stack>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"></div>
                      <div className="border border-dashed border-gray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"></div>
                      <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[97%]">
                        <Text className="Dec" variant="body4">
                          2016
                        </Text>
                        <Text className="Dec" variant="body4">
                          2017
                        </Text>
                        <Text className="Dec" variant="body4">
                          2018
                        </Text>
                        <Text className="Sep" variant="body4">
                          2019
                        </Text>
                        <Text className="Dec" variant="body4">
                          2020
                        </Text>
                        <Text className="Dec" variant="body4">
                          2021
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </List>
              <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                <Column className="mt-[1px] w-[60%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Investment
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[95%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_eye.svg"
                          className="flex items-center justify-center"
                          alt="eye"
                        />
                      </Button>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Apple Store
                        </Text>
                        <Text className="date_One" variant="body2">
                          E-commerce, Marketplace
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          $54,000
                        </Text>
                        <Text className="EnvestmentValu" variant="body2">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text
                          className="font-medium text-green_600 w-[auto]"
                          variant="body1"
                        >
                          +16%
                        </Text>
                        <Text className="date_One" variant="body2">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="common-pointer flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        onClick={handleNavigate1}
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_google.svg"
                          className="flex items-center justify-center"
                          alt="google"
                        />
                      </Button>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Samsung Mobile
                        </Text>
                        <Text className="date_Two" variant="body2">
                          E-commerce, Marketplace
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          $25,300
                        </Text>
                        <Text className="EnvestmentValu" variant="body2">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text
                          className="font-medium text-red_700 w-[auto]"
                          variant="body1"
                        >
                          -4%
                        </Text>
                        <Text className="date_One" variant="body2">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray103"
                      >
                        <Img
                          src="images/img_signal.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                          alt="signal"
                        />
                      </Button>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[37%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Tesla Motors
                        </Text>
                        <Text className="EnvestmentValu" variant="body2">
                          Electric Vehicles
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[25%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          $8,200
                        </Text>
                        <Text className="EnvestmentValu" variant="body2">
                          Envestment Value
                        </Text>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[15%]">
                        <Text
                          className="font-medium text-green_600 w-[auto]"
                          variant="body1"
                        >
                          +25%
                        </Text>
                        <Text className="date_One" variant="body2">
                          Return Value
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
                <Column className="w-[40%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trending Stock
                  </Text>
                  <Column className="bg-white_A700 justify-end lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius25 w-[100%]">
                    <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[2px] w-[97%]">
                      <Row className="items-start w-[96%]">
                        <Text className="Description" variant="body1">
                          SL No
                        </Text>
                        <Text
                          className="font-medium lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] text-bluegray_400 w-[auto]"
                          variant="body1"
                        >
                          Name
                        </Text>
                        <Text
                          className="font-medium mb-[1px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] text-bluegray_400 w-[auto]"
                          variant="body1"
                        >
                          Price
                        </Text>
                        <Text
                          className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] Description"
                          variant="body1"
                        >
                          Return
                        </Text>
                      </Row>
                      <Line className="bg-gray_101 h-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]" />
                    </Column>
                    <List
                      className="gap-[0] min-h-[auto] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-between lg:mr-[5px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] w-[98%]">
                        <Text className="One" variant="body1">
                          01.
                        </Text>
                        <Text className="One" variant="body1">
                          Trivago
                        </Text>
                        <Text className="One" variant="body1">
                          $520
                        </Text>
                        <Text
                          className="font-medium text-green_600 w-[auto]"
                          variant="body1"
                        >
                          +5%
                        </Text>
                      </Row>
                      <Row className="items-center xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] w-[100%]">
                        <Text className="One" variant="body1">
                          02.
                        </Text>
                        <Text
                          className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] One"
                          variant="body1"
                        >
                          Canon
                        </Text>
                        <Text
                          className="lg:ml-[58px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] One"
                          variant="body1"
                        >
                          $480
                        </Text>
                        <Text
                          className="font-medium lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] text-green_600 w-[auto]"
                          variant="body1"
                        >
                          +10%
                        </Text>
                      </Row>
                      <Row className="items-center justify-between 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] w-[97%]">
                        <Text className="One" variant="body1">
                          03.
                        </Text>
                        <Text className="One" variant="body1">
                          Uber Food
                        </Text>
                        <Text className="One" variant="body1">
                          $350
                        </Text>
                        <Text
                          className="font-medium text-red_700 w-[auto]"
                          variant="body1"
                        >
                          -3%
                        </Text>
                      </Row>
                      <Row className="items-start lg:mr-[5px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] w-[98%]">
                        <Text className="mt-[1px] One" variant="body1">
                          04.
                        </Text>
                        <Text
                          className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] One"
                          variant="body1"
                        >
                          Nokia
                        </Text>
                        <Text
                          className="3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] mt-[1px] One"
                          variant="body1"
                        >
                          $940
                        </Text>
                        <Text
                          className="font-medium lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] mt-[1px] text-green_600 w-[auto]"
                          variant="body1"
                        >
                          +2%
                        </Text>
                      </Row>
                      <Row className="items-start mr-[3px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] w-[99%]">
                        <Text className="mt-[1px] One" variant="body1">
                          05.
                        </Text>
                        <Text
                          className="lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] One"
                          variant="body1"
                        >
                          Tiktok
                        </Text>
                        <Text
                          className="3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] mt-[1px] One"
                          variant="body1"
                        >
                          $670
                        </Text>
                        <Text
                          className="font-medium lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] text-red_700 w-[auto]"
                          variant="body1"
                        >
                          -12%
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default InvestmentsPage;
