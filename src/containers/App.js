import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log('renderrrrring');
    return !robots.length ?
        <h1>Loading...</h1>
        :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox onChangeCallback={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}

export default App;
