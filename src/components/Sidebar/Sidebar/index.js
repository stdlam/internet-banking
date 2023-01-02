import React from "react";
import { Link } from "react-router-dom";
import { Column, Row, Img, Text, Line } from "components";

const Sidebar = ({ menuItems }) => {
  return (
    <>
      <aside className="w-[17%]">
        <div className="">
          <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] w-[100%]">
            <Row className="items-center justify-center w-[74%]">
              <Img src="images/img_logo.png" className="LOGO" alt="LOGO" />
              <Text className="Logo" as="h2" variant="h2">
                FiBank
              </Text>
            </Row>
            <Column className="justify-start lg:mb-[329px] xl:mb-[411px] 2xl:mb-[463px] 3xl:mb-[555px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[91%]">
            {menuItems.map((item) => {
                if (item.selected) {
                  return (<div style={{ marginTop: '20px' }}>
                    <Row className="items-center lg:mr-[15px] xl:mr-[19px] 2xl:mr-[22px] 3xl:mr-[26px] w-[100%]">
                      <Line className="bg-indigo_600 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                      <Img src={`images/${item.icon}.svg`} className="home" alt="home" />
                      <Text className="rowrectangleseventeen" as="h5" variant="h5">
                        {item.name}
                      </Text>
                    </Row>
                  </div>);
                }
                return (
                  <Column className="justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[2px] xl:mt-[2px] 2xl:mt-[2px] 3xl:mt-[12px] w-[80%]">
                    <Row className="items-center lg:mt-[28px] xl:mt-[28px] 2xl:mt-[28px] 3xl:mt-[28px] w-[100%]">
                      <Img
                        src={`images/${item.icon}.svg`}
                        className="transferOne"
                        alt="settings"
                      />
                      <Text className="rowlightbulb" as="h5" variant="h5">
                        <Link to={`/${item.page}`}>{item.name}</Link>
                      </Text>
                    </Row>
                  </Column>
                );
              })}
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
