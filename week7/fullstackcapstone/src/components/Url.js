import React from 'react'

function Url(props) {
    return (
        <div className="url">
            <h2 className="heading">Avenger WebSites</h2>
            {props.data.map((avenger, index) => {
          return(<div className="data">{avenger.URL}</div>)
        })}
        </div>
    )
}

export default Url