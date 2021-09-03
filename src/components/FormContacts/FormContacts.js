import classes from './FormContacts.module.css'
import React, { useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContacts from '../ListContacts/ListContacts'
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';


const FormContacts = () => {

    // const [name, setName] = useState('')
    // const [number, setNumber] = useState('')
    // const [filter, setFilter] = useState('')
    // const [contacts,setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    // ])
    
    
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const number = useSelector(state => state.number)
    const filter = useSelector(state => state.filter)
    const contacts = useSelector(state => state.contacts)
   

    const ClickHandler = () => {
        const contactItem = {
            name,
            number,
            id:Date.now()
        }
        
        dispatch({ type: "ADD_CONTACTS", payload: contactItem })

    }
 //    contacts.push({ id: uuidv4(), number: number })
    // const addContacts = (name) => {
    //     const contact = {
    //         name,
    //         id:Date.now()
    //     }
    //     dispatch({type:"ADD_CONTACTS",payload:contact})
    // }


    const filterList = (e) => {
        dispatch({type:"ADD_FILTER",payload:e.target.value})
    }
   


    const removeItem = (contact) => {
        
        dispatch({type:"REMOVE_CONTACTS",payload:contact.id})


        //  setCon(contacts.filter(el => el.id !== contactsId))
        console.log(contacts)
        
    };
    


    // useEffect(() => {
    //      contacts.map((i) => {
    //         if(i.name === name)alert('Данный контак уже сущесвует')
    //     })
    // })
    
    

    return (
        
        <div>
            {console.log("Name :",name)}
            {console.log("Number :", number)}
            {console.log("Contacts :", contacts)}
            { console.log("Filter :", filter)}
            
            <div className={classes.container}>

            <form onSubmit={(e)=>ClickHandler(e.preventDefault())}>
                 {/* <form onSubmit={()=>addContacts(prompt())}> */}
                
                <div className={classes.name}>
                    <label> Name </label>     
                </div>
             

                <div className={classes.input}>
                    <input
                        value={name}
                            onChange={(e) => dispatch({ type:"ADD_NAME", payload:e.target.value})}
                        type="text"
                        placeholder="Name.."
                    />
                </div>
                
                <div className={ classes.number}>
                     <label>Number</label>
                </div>
                
                <div>
                    <input
                        value={number}
                        onChange={(e) => dispatch({ type:"ADD_NUMBER", payload:e.target.value})}
                        type="tel"
                        placeholder="Number.." />
                </div>
                
                <div className={classes.button}>
                    <button type='submit'>add contacts</button>
                </div>
               
            </form>
            </div>

            <h1>Contacts</h1>

            <Filter filter={ filterList}/>
           
            <ListContacts
                // contacts={contacts.filter((item) => item.name.toLowerCase().search(filter) !== -1)}
                contacts={ contacts.filter((item) => item.name.toLowerCase().search(filter) !== -1)}
                deleteEl={ removeItem}
            />
            
            {/* {contacts.length > 0 ?
                <div>
                    {contacts.map(contact => <div>{ contact.name}</div>)}
                </div>
                :
                <div>
                    нет имен
                </div>
        
            }
             */}
            </div>
  )
}
export default FormContacts