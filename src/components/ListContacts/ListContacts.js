import classes from './ListContacts.module.css'
import { v4 as uuidv4 } from 'uuid';



const ListContacts = (props) => {

    
    let contactsList = props.contacts.map((item) => {

        if (item.name !== item.name)alert('dsds')
        return <li key={uuidv4()}>{item.name + ": " + item.number}<button onClick={()=>props.deleteEl()}>delete</button></li>
    })
    return (
        <div className={classes.container}>

                <div>{contactsList}</div>
            
        </div>
    )
}
export default ListContacts