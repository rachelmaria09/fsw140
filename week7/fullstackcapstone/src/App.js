import React, {useState} from 'react'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Name from './components/Name'
import Url from './components/Url'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
    const [data, setData] = useState([])
    function getData() {
        axios.get(`/data`)
        .then(res => {
          setData(res.data)
        })
        .catch(err => console.log(err))
      }

      function addOne(e) {
        axios.post(`/data`, inputs)
        .then(res => {
          setData(...data, res.data)
        })
        .catch(err => console.log(err))
      }

      const [inputs, setInputs] = useState({name: "", URL: ""})
      function handleChange(e) {
        const {name, value}=e.target
        setInputs({...inputs, [name]:value})
      }

      function updateOneName(index, avenger) {
        setInputs({...inputs, URL: avenger.URL})
        console.log(avenger['Name/Alias'])
        axios.put(`data/name/${avenger['Name/Alias']}`, inputs)
        .then(res => {
          console.log(res.data)
          setData(res.data)
        })
        .catch(err => console.log(err))
      }

      function updateOneUrl(index, avenger) {
        setInputs({...inputs, URL: avenger.URL})
        console.log(avenger['URL'])
        axios.put(`data/url/${avenger['Name/URL']}`, inputs)
        .then(res => {
          console.log(res.data)
          setData(res.data)
        })
        .catch(err => console.log(err))
      }

      function deleteOneName(index, avenger) {
        axios.delete(`data/name/${avenger['Name/Alias']}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      }

      function deleteOneUrl(index, avenger) {
        axios.delete(`data/url/${avenger['URL']}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      }

    return (
      <div className='App'>
        <div>
        {getData()}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home handleChange={handleChange} addOne={addOne} {...inputs}/>
          </Route>
          <Route path="/name">
            <Name data = {data} input={inputs} updateOne={updateOneName} handleChange={handleChange} deleteOne={deleteOneName}/>
          </Route>
          <Route path="/url">
            <Url data = {data} input={inputs} updateOne={updateOneUrl} handleChange={handleChange} deleteOne={deleteOneUrl}/>
          </Route>
        </Switch>
        </div>
      </div>
    )
}

export default App;