import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  React, { Component } from  'react';
import ReactDOM from 'react-dom';



function Login() {

	/*log(){
        const url = 'http://127.0.0.1/api/1';
        return axios.get(url,
		{
            "login": this.refs.login.value,
            "pass": this.refs.password.value,
            
        }
		);}	*/
  return (
    <div className="App">
	
		<div className='tableOfLots'>
				<h1>LOG IN</h1>
				
				<form method='GET' action='/lot'>
					
					<input ref='login' placeholder = 'Ваше имя'/><br/>
					<input ref='password' type='password' placeholder = 'Пароль'/>
					<input id='sub' type='submit' value='Вход' />
				</form>	
		</div>
		
    </div>
  )
}

export default Login;
