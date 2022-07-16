import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
// import { robots } from './robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchText: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    render() {
        const { robots, searchText } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading...</h1>
            :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox onChangeCallback={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;
