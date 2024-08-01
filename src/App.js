import React from 'react';
import './App.css';
import logo from './images/logo.png';
import dashboard from './images/dashboard.png';
import hand from './images/hand-shake.png'
import Index from './components/index.js';
import { Search, Command, Briefcase, CreditCard, BarChart, Settings, HelpCircle } from 'react-feather';

function App() {
  return (
    <div className='grid grid-cols-12 mt-3'>
        <div className='col-span-2'>
          <div className='flex mt-4'>
            <img className='logo w-12' src={logo} alt="Logo"></img>
            <a className='title'>Truncheon</a>
          </div>
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search" />
            <span className="search-text"><Command className='command' />F</span>
          </div>
          <nav className='sidebar'>
            <ul>
              <li className='active'>
                <img className='mr-2' src={dashboard} alt="dashboard"></img>
                <a>Dashboard</a>
              </li>
              <li>
                <img className='hand' src={hand} alt='hand'></img>
                <a>Transaction</a>
                <h1 className='avatar'>12</h1>
              </li>
              <li>
                <Briefcase className='hand briefcase' />
                <a>Payments</a>
              </li>
              <li>
                <CreditCard className='credit-card' />
                <a>Transaction</a>
                <h1 className='avatar-single'>4</h1>
              </li>
              <li>
                <BarChart className='credit-card' />
                <a>Analytics</a>
                <h1 className='avatar-single'>6</h1>
              </li>
              <div className='hr'>
                <hr></hr>
              </div>
              <li className='mt-0'>
                <Settings className='setting' />
                <a>Analytics</a>
              </li>
              <li>
                <HelpCircle className='setting' />
                <a>Help and Support</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-span-10 content'>
          <Index />
        </div>
      </div>
  );
}

export default App;
