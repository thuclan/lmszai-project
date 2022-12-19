import React from "react";
import HomePage from "./page/home/HomePage";
import { Route, Routes } from "react-router";
import LogInPage from "./page/login/login";
import Product from "./page/product/Product";
import Layout from "./layout/Layout";
import {
  About,
  Blog,
  Contact,
  CookiePolicy,
  Forum,
  PrivacyPolicy,
  Support,
  TermsCondition,
} from "./components/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/product-detail/:productCode" element={<Product />} />
      </Route>
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
}

export default App;
