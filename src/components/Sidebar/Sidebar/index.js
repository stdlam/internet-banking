import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] w-[100%]">
            <Row className="items-center justify-center w-[74%]">
              <Img src="images/img_logo.png" className="LOGO" alt="LOGO" />
              <Text className="font-inter Logo" as="h2" variant="h2">
                FirstBank
              </Text>
            </Row>
            <Column className="justify-start lg:mb-[209px] xl:mb-[261px] 2xl:mb-[294px] 3xl:mb-[353px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[91%]">
              <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[80%]">
                <Row className="items-start w-[86%]">
                  <Img
                    src="images/img_home_25X25.svg"
                    className="transferOne"
                    alt="home"
                  />
                  <Text className="rowhome" as="h5" variant="h5">
                    Dashboard
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[98%]">
                  <Img
                    src="images/img_transfer1.svg"
                    className="transferOne"
                    alt="transferOne"
                  />
                  <Text className="rowhome" as="h5" variant="h5">
                    Transactions
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[79%]">
                  <Img
                    src="images/img_user.svg"
                    className="transferOne"
                    alt="user"
                  />
                  <Text className="rowuser1" as="h5" variant="h5">
                    Accounts
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[94%]">
                  <Img
                    src="images/img_map.svg"
                    className="transferOne"
                    alt="map"
                  />
                  <Text className="rowhome" as="h5" variant="h5">
                    Investments
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[96%]">
                  <Img
                    src="images/img_file.svg"
                    className="transferOne"
                    alt="file"
                  />
                  <Text className="rowuser1" as="h5" variant="h5">
                    Credit Cards
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[60%]">
                  <Img
                    src="images/img_question.svg"
                    className="transferOne"
                    alt="question"
                  />
                  <Text className="rowuser1" as="h5" variant="h5">
                    Loans
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[75%]">
                  <Img
                    src="images/img_service1.svg"
                    className="transferOne"
                    alt="serviceOne"
                  />
                  <Text className="rowhome" as="h5" variant="h5">
                    Services
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="transferOne"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-inter rowlightbulb"
                    as="h5"
                    variant="h5"
                  >
                    My Privileges
                  </Text>
                </Row>
              </Column>
              <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[73%]">
                <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <Img
                  src="images/img_settings_25X25.svg"
                  className="home"
                  alt="settings"
                />
                <Text
                  className="font-inter rowrectangleseventeen"
                  as="h5"
                  variant="h5"
                >
                  Setting
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
