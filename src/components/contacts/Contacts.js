import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types';
import { getContacts } from "../../actions/contactActions";


class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    console.log(this.props.contacts);
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// the property which keeps the reducer is called contact, which in turn keeps the state in contacts array hence the contacts property takes state.contact.contacts
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

// getContacts keeps the dispatch function and passes it as a prop
// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch({type: GET_CONTACTS})
// });



export default connect(mapStateToProps, {getContacts})(Contacts);
