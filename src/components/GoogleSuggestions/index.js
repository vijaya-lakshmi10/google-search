// Write your code here

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component{
    state={searchInput:''}

    onChangeSearchInput=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    displaySearchInput=(suggestion)=>{
        this.setState({searchInput:suggestion})
    }

    render(){
        const {searchInput}=this.state
        const {suggestionsList}=this.props
        const searchResults=suggestionsList.filter((eachInput)=>(eachInput.suggestion.toLowerCase().includes(searchInput.toLowerCase())))
        return(
            <div className="bg-container">
            <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" className="logo-image"/>
            <div className="search-container">
            <div className="search-bar-container">
            <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon" className="image"/>
            <input type="search" placeholder="Search Google" className="searchbar-heading" onChange={this.onChangeSearchInput} value={searchInput}/>
            </div>
            <ul className="search-list-items">
            {searchResults.map((search)=>(<SuggestionItem suggestionItems={search} key={search.id} displaySearchInput={this.displaySearchInput}/>))}
            </ul>
            </div>
            </div>
        )
    }
}
export default GoogleSuggestions 


