import React from 'react';
import './App.scss';
import Header from "./components/Header.js";
import PlayerList from './components/PlayerList.js';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
      axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            // console.log(response.data)
            this.setState({
              players: response.data
            })
          })
        .catch(error => {
          console.error('Server Error', error);
        });
  }

  render() {
      return (
        <div className="App">
          <Header />
          <PlayerList playerData={this.state.players}/>
        </div>
      );
    }
  }

export default App;
