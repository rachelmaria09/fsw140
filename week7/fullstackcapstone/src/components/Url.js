import React, {useState} from 'react'

function Url(props) {
    const [editing, setEdit] = useState({toggle: false, i: 0})
    return (
        <div className="url">
            <h2 className="heading">Avenger WebSites</h2>
            {props.data.map((avenger, index) => {
          return(
            <div className="data" key={index}> 
              {avenger['URL']}
              {editing.toggle && editing.i === index ? 
                    <div><input 
                        name="URL" 
                        value={props.input.URL} 
                        onChange={props.handleChange} 
                        placeholder="new URL">
                    </input>
                    <button className="btn"
                        onClick={(e) => 
                            {setEdit({...editing, toggle: false})
                            ;
                            props.updateOne(index, avenger)}}
                            >
                                Submit
                    </button>
                    </div>
                    :
                    <button className="btn" onClick={() => 
                    {setEdit({toggle: true, i: index})}}
                    >
                        Edit
                    </button>}
                    <button className="btn" onClick={() => 
                        props.deleteOne(index, avenger)}>Delete</button>
          </div>)
        })}
        </div>
    )
}

export default Url