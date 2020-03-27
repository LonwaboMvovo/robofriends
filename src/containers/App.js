import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {robots: users }));
    }

    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value } )
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
        <h1 className='tc f1'>Loading</h1> :
        (
            <div className='tc'>
<<<<<<< HEAD
                <h1 className='f2'>RoboFriends</h1>
=======
                <h1 className='f1'>RoboFriends</h1>
>>>>>>> d005d649b6e578917c99a9827c9ff93971f457dc
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;