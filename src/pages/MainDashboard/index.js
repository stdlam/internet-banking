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
  Menu,
  Sidebar,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MainDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  const menuItems = [
    { page:'maindashboard',name: 'Dashboard', icon: 'img_home_25X25' , selected:true},
    { page:'transaction',name: 'Transactions', icon: 'img_transfer1' },
    { page:'accounts',name: 'Accounts', icon: 'img_user' },
    { page:'investments',name: 'Investments', icon: 'img_map' },
    { page:'creditcards',name: 'Credit Cards', icon: 'img_file' },
    { page:'loan',name: 'Loans', icon: 'img_question' },
    { page:'services',name: 'Services', icon: 'img_service1' },
    { page:'settingpageone',name: 'My Privileges', icon: 'img_lightbulb' },
    { page:'settingpagetwo',name: 'Settings', icon: 'img_settings' },
    { page:'settingpagethree',name: 'Settings3', icon: 'img_settings' },
  ];

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        {/* Side bar */}
        <Sidebar menuItems={menuItems}/>
        <Line className="bg-gray_101 xl:h-[1054px] 2xl:h-[1185px] 3xl:h-[1422px] lg:h-[842px] w-[1px]" />
        <Column className="items-center justify-start w-[83%]">

          {/* Menu */}
          <Menu />

          {/* Content */}
          <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[93%]">
            {/* add content here */}
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MainDashboardPage;
