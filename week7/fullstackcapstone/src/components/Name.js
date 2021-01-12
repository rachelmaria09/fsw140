import React, {useState} from 'react'

function Name(props) {
    const [editing, setEdit] = useState({toggle: false, i: 0})
    return (
        <div className="name">
            <h2 className="heading">Avenger Names</h2>
            {props.data.map((avenger, index) => {
          return(
          <div className="data">
              {avenger['Name/Alias']}
                {editing.toggle && editing.i === index ? 
                    <div><input 
                        name="name" 
                        value={props.input.name} 
                        onChange={props.handleChange} 
                        placeholder="new name">
                    </input>
                    <button className="btn"
                        onClick={(e) => {setEdit({...editing, toggle: false});props.updateOne(index, avenger)}}>Submit</button>
                    </div>:<button className="btn" onClick={() => {setEdit({toggle: true, i: index})}}>Edit</button>}
                    <button className="btn" onClick={() => props.deleteOne(index, avenger)}>Delete</button>
          </div>)
        })}
        </div>
    )
}

export default Name