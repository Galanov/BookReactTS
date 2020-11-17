import React from 'react';
import './App.css';
import {Header} from './Header';
import {HomePage} from './HomePage'

//import { css, jsx } from '@emotion/core';

const App: React.FC = () =>{
    return(
        <div className="App">
            <Header />
            <HomePage />
        </div>
    );
};

export default App;
