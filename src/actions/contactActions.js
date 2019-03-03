import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: response.data
  });
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
