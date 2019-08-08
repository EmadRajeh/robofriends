import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'; 


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value })
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
			.then(users => this.setState({ robots: users}))
		
	}
	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robots => {
		 	return robots.name.toLowerCase().includes(searchField.toLowerCase());
		 })
		return !robots.length ? 
			<h1>Loadding</h1>
		: 
		( 
		<div className='tc'>
		<h1 className= 'f2'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
		
			);
		}	
	}




export default App;   
