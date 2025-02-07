import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
const Reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                // DESTRUCTURE state
                ...state,
                // REPLACING contacts inside of destructured state using filter to ignore specific ID
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                )
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => {
                return Reducer(state, action);
            });
        }
    };

    // Lifecycle
    async componentDidMount() {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        this.setState({
            contacts: res.data
        });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
