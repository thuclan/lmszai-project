import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './page/home/HomePage';
import LogInPage from './page/login/login';
import Product from './page/product/Product';
import Layout from './layout/Layout';
import {
	About,
	Blog,
	Contact,
	CookiePolicy,
	Forum,
	PrivacyPolicy,
	Support,
	TermsCondition
} from './components/page';
import Development from './components/page/courses/development';
import Business from './components/page/courses/business';
import Design from './components/page/courses/design';
import ItSoftware from './components/page/courses/itsoftware';
import Dashboard from './page/dashboard';

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
				<Route path="/category/courses/development" element={<Development />} />
				<Route path="/category/courses/business" element={<Business />} />
				<Route path="/category/courses/it-software" element={<ItSoftware />} />
				<Route path="/category/courses/design" element={<Design />} />
				<Route path="/product-detail/:productCode" element={<Product />} />
			</Route>
			<Route path="/login" element={<LogInPage />} />
			<Route path="/admin/dashboard" element={<Dashboard />} />
		</Routes>
	);
}

export default App;
