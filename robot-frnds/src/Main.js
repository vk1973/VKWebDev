// This "Main.js" is the main container that will have the search box, CardArray with all robots and Card.js for individual robots
// Main.js has to create a link between what is entered in search box and thr robots list so that only those that match the search text
// are shown
// React JS is componenbased. A UI is made of many components. React controls all data exchange across components with states and props
// Props are similar to parameters in JS functions. Their value cannot be changed. 
// State is like a data store in React. A State can be set when an event occurs. React.component is the base class for all class based
// React components. 
// when a component class inherits base class, the default state value (null) is set
// the state can be changed by overriding constructor method of the class. Setstate keyword is used to set the state when an event
// occurs
// in this example, we will use class based component and not function based component since the state needs to be set when an event 
//occurs

import React, { Component } from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';

// Add one Div at the top for a heading and search box
// SearchBox js will track what is entered in the box
// CardArray will display all robots

class Main extends Component {

// Constructor method to override state

    constructor() {
        super()
        this.state = {
            // robots (in blue) is a file full of robots details in jason format. Imported above
            // this is commented to declare robots (in orange) as an empty array and fetch list of 
            //robots from an external source. then import of robots.js is not required
            //robots: robots,
            robots: [], 
            searchfield: ''
        }
    }

// Use componentDidMount component to fetch list of robots from external source

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

//track the event and use the search field value
    onsearchchange = (event) => {
        this.setState({ searchfield : event.target.value})
        
    }

// filteredrobots captures all robots that match the text entere in search field
// this set of filteredrobots is passed to CardArray.js to display the filtered result
    render () {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>

           
                <h1 className = 'f1 light-green courier'>Robot Friends</h1>
                <SearchBox searchchange = {this.onsearchchange}/>
                <Scroll>
                    <CardArray robots = {filteredrobots}/> 
                </Scroll>
                </div>
        );
    }
}

export default Main;