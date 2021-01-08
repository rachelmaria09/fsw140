import React, {useState} from 'react'
import axios from 'axios'

export default function App() {
    const [data, setData] = useState([])
    function getData() {
        axios.get(`/data`)
        .then(res => {
          setData(res.data)
        })
        .catch(err => console.log(err))
      }
  
    return (
      <div className='App'>
        <div>
        <h2 className="heading">Avenger's Name and URL</h2>
        {getData()}
        {data.map((avenger, index) => {
          return(<div className="data">{avenger['Name/Alias']},<br></br> {avenger.URL}</div>)
        })}
        </div>
      </div>
    )
}
