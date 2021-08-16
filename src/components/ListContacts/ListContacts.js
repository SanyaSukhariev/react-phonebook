import classes from './ListContacts.module.css'
import { v4 as uuidv4 } from 'uuid';



const ListContacts = (props) => {

    const contact = {
        id: uuidv4()
    }
    const contactsList = props.contacts.map((contact) => {
        return <li key={contact.id}>{contact.name + ": " + contact.number}<button className={ classes.button} onClick={()=>props.deleteEl(contact.id)}>delete</button></li>
    })
    return (
        <div className={classes.container}>

                <div>{contactsList}</div>
            
        </div>
    )
}
export default ListContacts