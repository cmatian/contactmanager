import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

// Contact Class
class Contact extends React.Component {
    state = {
        showContactInfo: false
    };

    onClickShow = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    onClickDelete = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    };

    render() {
        const { id, name, email, phone } = this.props.contact;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i
                                    onClick={() => this.onClickShow()}
                                    className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }}
                                ></i>
                                <i
                                    onClick={() =>
                                        this.onClickDelete(id, dispatch)
                                    }
                                    className="fas fa-times"
                                    style={{
                                        cursor: 'pointer',
                                        float: 'right',
                                        color: 'red'
                                    }}
                                ></i>
                            </h4>
                            {this.state.showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

// PropTypes
Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
