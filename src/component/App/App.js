import React, { Component } from 'react';
import './App.css';
import { setCookie, getCookie } from '../../services/cookies';
import axios from 'axios';

class App extends Component {
    state = {
        enteredCreature: '',
        favoriteCreature: '',
    }

    componentDidMount() {
        this.getCreature();
    }
    
    changeFavoriteAnimal = (event) => {
        this.setState({
            enteredCreature: event.target.value,
        });
    }

    saveCreature = (event) => {
        axios.post('/creature', {
            fantasticCreature: this.state.enteredCreature
        })
            .then((response) => {
                this.getCreature();
            })
            .catch((err) => {
                console.log('POST error: ', err);
                alert('There was an error getting a creature.');
            });

        this.setState({
            enteredCreature: '',
        });
    }

    //
    // API Calls
    // ------------------------------------------------------------

    getCreature() {
        axios.get('/get-creature')
            .then((response) => {
                this.setState({
                    favoriteCreature: response.data,
                });
            })
            .catch((err) => {
                console.log('GET error: ', err);
                alert('There was an error getting a creature.');
            });
    }

    postCreature() {
        axios.post('/creature', {
            fantasticCreature: this.state.enteredCreature
        })
            .then((response) => {
                this.getCreature();
            })
            .catch((err) => {
                console.log('POST error: ', err);
                alert('There was an error getting a creature.');
            });
    }

    render() {
        let myCreature = <h3>You have not chosen a Favorite Creature</h3>;

        if (this.state.favoriteCreature != null
            && this.state.favoriteCreature.length > 0
        ) {
            myCreature = <h3>Your Favorite Creature: {this.state.favoriteCreature}</h3>
        }

        return (
            <div>
                <div className="headerBar">
                    <h1>Browser Cookies</h1>
                    {myCreature}
                </div>

                <div className="container">
                    <label className="formField">
                        <div>Favorite Fantastic Creature:</div>
                        <input
                            type="text"
                            placeholder="Animal"
                            value={this.state.enteredCreature}
                            onChange={this.changeFavoriteAnimal}
                        />
                    </label>
                    <button onClick={this.saveCreature}>Save My Creature</button>
                </div>
            </div>
        );
    }
}

export default App;
