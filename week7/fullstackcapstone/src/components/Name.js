import React from 'react'

function Name(props) {
    return (
        <div className="name">
            <h2 className="heading">Avenger Names</h2>
            {props.data.map((avenger, index) => {
          return(<div className="data">{avenger['Name/Alias']}</div>)
        })}
        </div>
    )
}

export default Name