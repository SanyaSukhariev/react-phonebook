import classes from './FormContacts.module.css'
import React, { useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContacts from '../ListContacts/ListContacts'
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';



const FormContacts = () => {

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
        
        if (name !== "" || number !== "") dispatch({type:"RESET"}); 
        dispatch({ type: "ADD_CONTACTS", payload:contactItem })
       
    }

    const filterList = (e) => {
        dispatch({ type: "ADD_FILTER", payload: e.target.value })
         
    }
   
    const removeItem = (contact) => {
        
        dispatch({type:"REMOVE_CONTACTS",payload:contact.id})
        console.log(contacts)
        
    };
    

    useEffect(() => {
         contacts.map((i) => {
            if(i.name === name)alert('Данный контак уже сущесвует')
        })
    })

    

    return (
        
        <div>
            <div className={classes.container}>

            <form onSubmit={(e)=>ClickHandler(e.preventDefault())}>
    
                
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
                            placeholder="Number.."
                           
                        />
                        
                </div>
                
                <div className={classes.button}>
                    <button type='submit'>add contacts</button>
                </div>
               
                </form>
               
            </div>

            <h1>Contacts</h1>

            <Filter filter={ filterList}/>
           
            <ListContacts
                contacts={ contacts.filter((item) => item.name.toLowerCase().search(filter) !== -1)}
                deleteEl={ removeItem}
            />
            
            </div>
  )
}
export default FormContacts