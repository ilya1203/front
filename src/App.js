import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  React, { Component } from  'react';
import ReactDOM from 'react-dom';

import ClientList from './ClientList';


function App(pk) {
	var date = new Date();
	let tm = 120 - date.getMinutes()%2*60 - date.getSeconds();

	function reload(){
		tm--;
		date = new Date();
		ReactDOM.render((<span >{60-date.getSeconds()}</span>), document.getElementById('sec'));
		if(tm == 0){window.location.reload(false);}
	}
	{setInterval(reload, 1000*1)}
  return (
    <div className="App">
	
		<div className='tableOfLots'>
				<ClientList pk={pk} />
				
			</div>
		
    </div>
  )
}

export default App;
