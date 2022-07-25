import React from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import Cards from './components/Cards/Cards';
import Content from './components/Content/Content';

function App() {
	return (
		<div className='App'>
			<Header />
			<Top />
			<Cards />
			<Content />
		</div>
	);
}

export default App;
