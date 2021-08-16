import classes from './ListContacts.module.css'
import { v4 as uuidv4 } from 'uuid';



const ListContacts = (props) => {

    const contact = {
        id: uuidv4()
    }
    let contactsList = props.contacts.map((c) => {
        return <li key={contact.id}>{contact.name + ": " + contact.number}<button onClick={()=>props.deleteEl(contact.id)}>delete</button></li>
    })
    return (
        <div className={classes.container}>

                <div>{contactsList}</div>
            
        </div>
    )
}
export default ListContacts