import React, { Component } from 'react';
import cookiesService from '../../services/cookies';

const creatureCookieName = 'favoriteCreature';

class App extends Component {
    state = {
        enteredCreature: '',
        favoriteCreature: '',
    }
    
    changeFavoriteAnimal = (event) => {
        this.setState({
            enteredCreature: event.target.value,
        });
    }

    saveCreature = (event) => {
        this.setState({
            favoriteCreature: this.state.enteredCreature,
            enteredCreature: '',
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
                <h1>Browser Cookies</h1>
                {myCreature}

                <div>
                    <label>
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
