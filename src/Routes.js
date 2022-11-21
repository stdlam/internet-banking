import React from "react";
import SettingPageThree from "pages/SettingPageThree";
import SettingPageTwo from "pages/SettingPageTwo";
import SettingPageOne from "pages/SettingPageOne";
import Services from "pages/Services";
import Loan from "pages/Loan";
import CreditCards from "pages/CreditCards";
import Investments from "pages/Investments";
import Accounts from "pages/Accounts";
import Transaction from "pages/Transaction";
import MainDashboard from "pages/MainDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/creditcards" element={<CreditCards />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settingpageone" element={<SettingPageOne />} />
        <Route path="/settingpagetwo" element={<SettingPageTwo />} />
        <Route path="/settingpagethree" element={<SettingPageThree />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
