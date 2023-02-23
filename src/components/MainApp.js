import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar/SearchBar'
import SearchCategories from './SearchCategories/SearchCategories'
import SearchResults from './SearchResults/SearchResults'

const MainApp = (props) => {
  return (
    <div className="App">
        <Header travel2gologo = {props.travel2gologo} />
          
          <div className="search-container ml-10 mr-10">
            <SearchBar handleSelect={props.handlePlaceSelect} />
            <SearchCategories  setType={props.setType} handleTypeSelect={props.setType} />
            {props.location.lat && props.location.lng && (
              <SearchResults location={props.location} type={props.type} />
            )}
          </div>
        
        </div>
  )
}

export default MainApp