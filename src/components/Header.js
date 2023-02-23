import React from 'react'

const Header = (props) => {
  return (
        <header className="App-header">
          <img src={props.travel2gologo} alt="Travel 2 Go Logo" className="mx-auto" style={{ width: 100, height: 'auto'}} />
            <h1 className="text-blue-700 text-3xl flex justify-center p-2">Travel2Go</h1>
          </header>
    
  )
}

export default Header