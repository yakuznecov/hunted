import React from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import Cards from './components/Cards/Cards';

function App() {
	return (
		<div className='App'>
			<Header />
			<Top />
			<Cards />
		</div>
	);
}

export default App;
