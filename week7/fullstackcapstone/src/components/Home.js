import React from 'react'

function Home(props) {
    return (
        <div className="home">
            <h2 className="homeHeading">The <br></br> Avengers</h2>
            <img className="homeImage" src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJoZXJvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
            <form className="form">
                <input
                className="input"
                name="name"
                placeholder="name"
                value={props.name}
                onChange={props.handleChange}
                >
                </input>
                <input
                className="input"
                name="URL"
                placeholder="URL"
                value={props.URL}
                onChange={props.handleChange}
                >
                </input>
                <button className="btn" onClick={props.addOne}>Submit</button>
            </form>
        </div>
    )
}

export default Home