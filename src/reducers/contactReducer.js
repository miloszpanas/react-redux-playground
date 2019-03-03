import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_SINGLE_CONTACT, UPDATE_CONTACT } from "../actions/types";

const initialState = {
  contacts: [],
  singleContact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case GET_SINGLE_CONTACT:
      return {
        ...state,
        singleContact: action.payload
      }
    default:
      return state;
  }
}
