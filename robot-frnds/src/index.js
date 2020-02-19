import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Main.css';
//import App from './App';
//import Hello from './Hello';
//import Hellofunc from './Hellofunc';

// We will not use "Cards.js" in index.js now. We will use a parent element CardArray.js instead
//import Cards from './Cards';

//import CardArray from './CardArray';
//import { robots } from './robots';

import Main from './Main';
import 'tachyons';

import * as serviceWorker from './serviceWorker';


// Let us clean this up a bit. We cannot have multiple lines of Cards to render. Code looks ugly. what if we had 100 robots to list
// We will create a parent element that will use "Cards.js"

/* ReactDOM.render(
                <div>
                    <Cards id={robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
                    <Cards id={robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
                    <Cards id={robots[2].id} name = {robots[2].name} email = {robots[2].email}/>
                    <Cards id={robots[3].id} name = {robots[3].name} email = {robots[3].email}/>
                    <Cards id={robots[4].id} name = {robots[4].name} email = {robots[4].email}/>
                </div>, document.getElementById('root')); */

                //ReactDOM.render(<CardArray robots = {robots} />, document.getElementById('root'));

                ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
