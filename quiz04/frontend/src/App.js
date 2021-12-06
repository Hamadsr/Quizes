import React from 'react';
import { Route } from 'react-router-dom';

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = (props) => {
	
	return <div className="App">
		
		<Header  string={"String"}/>
		<Main />
		<Footer/>
		
	</div>;
};

export default App;
