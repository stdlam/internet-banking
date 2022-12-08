import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/maindashboard">MainDashboard</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
        <li>
          <Link to="/creditcards">CreditCards</Link>
        </li>
        <li>
          <Link to="/loan">Loan</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/settingpageone">SettingPageOne</Link>
        </li>
        <li>
          <Link to="/settingpagetwo">SettingPageTwo</Link>
        </li>
        <li>
          <Link to="/settingpagethree">SettingPageThree</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
