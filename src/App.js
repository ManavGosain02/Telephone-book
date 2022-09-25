import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import Heading from './Components/heading/heading.component';
import SearchBox from './Components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();

    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((usersList) => this.setState(() => { 
      return {users: usersList}
    },
    () => {
      
    },
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState (() => {
      return { searchField };
    },);
  }

  render(){

    const { users, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <Heading />
        <SearchBox onChangeHandler={onSearchChange} placeholder='search users' className='users-search-box' />
        <CardList users={ filteredUsers } />
      </div>
    );
  }
}

export default App;
