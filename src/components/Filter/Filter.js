


const Filter = (props) => {


    return (
         <div>
                
               <span>Find contacts by Name</span>
                <div>
                    <input type='text'placeholder="Поиск" onChange={props.filter} />
                </div>

        </div>
         )
}
export default Filter