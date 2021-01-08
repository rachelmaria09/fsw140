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
      
    return (
      <div className='App'>
        <div>
        {getData()}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/name">
            <Name data = {data}/>
          </Route>
          <Route path="/url">
            <Url data = {data}/>
          </Route>
        </Switch>
        </div>
      </div>
    )
}

export default App;