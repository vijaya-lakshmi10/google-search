// Write your code here
import './index.css'

const SuggestionItem=props=>{
    const {suggestionItems,displaySearchInput}=props
    const {suggestion}=suggestionItems
    const onClickGivenSuggestions=()=>{
        displaySearchInput(suggestion)
    }
    return(
        <li className="suggestion-list-items">
        <div className="suggestion-items">
        <p className="suggestion-list">{suggestion}</p>
        <button className="search-btn" type="button" onClick={onClickGivenSuggestions}><img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" class="arrow-img" alt="arrow"/>
        </button>
        </div>
        </li>
    )
}
export default SuggestionItem
