import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
    name: "",
    number: "",
    filter: "",
    contacts:[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_NAME":
      
      return { ...state, name: action.payload }
    case "ADD_NUMBER":
      return { ...state, number: action.payload }
    
    case "ADD_FILTER":
      return { ...state, filter: action.payload }
    
    case "ADD_CONTACTS":
      return { ...state, contacts: [...state.contacts, action.payload] }
    
    case "REMOVE_CONTACTS":
      return{...state, contacts:state.contacts.filter(el => el.id  !== action.payload)}
     case 'RESET':
      return { ...state, name:'' ,number:''}
    
    default:
      return state
        }
        
}
const store = createStore(reducer)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
