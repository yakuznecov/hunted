import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import Cards from './components/Cards/Cards';
import Content from './components/Content/Content';
import Join from './components/Join/Join';
import Resumes from './components/Resumes/Resumes';
import Footer from './components/Footer/Footer';

function App() {
	const [activePage, setActivePage] = useState('applicant');

	const switchActivePage = (page, e) => {
		setActivePage(page);
	};

	return (
		<div className="App">
			<Header onSwitch={switchActivePage} active={activePage} />
			<Top active={activePage} />
			{activePage === 'applicant' && <Cards active={activePage} />}
			{activePage === 'employer' && <Resumes />}
			{activePage === 'employer' && <Cards active={activePage} />}
			<Content active={activePage} />
			<Join />
			<Footer />
		</div>
	);
}

export default App;
