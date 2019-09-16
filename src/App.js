// React
import React, { Component } from 'react';
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Test from './components/test/Test';
import NotFound from './components/pages/NotFound';

// Provider Context API
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router basename={process.env.PUBLIC_URL + '/'}>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Contacts}
                                ></Route>
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                ></Route>
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditContact}
                                ></Route>
                                <Route
                                    exact
                                    path="/about"
                                    component={About}
                                ></Route>
                                <Route
                                    exact
                                    path="/test"
                                    component={Test}
                                ></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
