import classes from './FormContacts.module.css'
import React, { useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListContacts from '../ListContacts/ListContacts'
import Filter from '../Filter/Filter';


const FormContacts = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [contacts,setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ])


    const ClickHandler = () => {

        if (name !== '' || number !== '') contacts.push({ name: name, id: uuidv4(), number: number })
     
       
    }
    const filterList = (e) => {
        setFilter(e.target.value)
      
    }
    const deleteElements = () => {
       
    
    }
    const removeItem=(id)=>{
         setContacts(prevState => prevState.filter(el => el.id !== id))
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
             

                <div className={ classes.input}>
                    <input
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
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
                        onChange={(e) => { setNumber(e.target.value) }}
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
                contacts={contacts.filter((item) => item.name.toLowerCase().search(filter) !== -1)}
                deleteEl={removeItem}
            />
            
            
            </div>
  )
}
export default FormContacts