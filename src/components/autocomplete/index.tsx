import "./autocomplete.scss"
import React, {useEffect,useRef} from "react"
import useAutocomplete from "../../hooks/autocomplete"
interface Props{
  options:string[],
  placeholder?: string,
  setSelected:(arg:string) => void
}
const Autocomplete = ({options,placeholder,setSelected}:Props) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const {
    searchedValue,
    suggestions,
    selectedSuggestion,
    activeSuggestion,
    handleChange,
    handleKeyDown,
    handleClick,
  } = useAutocomplete(options, inputSearchRef.current,setSelected);
  console.log(searchedValue,suggestions)
  console.log(selectedSuggestion)
  console.log(activeSuggestion)
  
  return (
    <div className="autocomplete">
      <input
        placeholder={placeholder ?? "Search.."}
        value={searchedValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputSearchRef}
        className="autocomplete-input"
        id="autocomplete-input"
      />
      <>
      {suggestions.map((suggestion, index) => (
        <button type="button" id="autocomplete-input"className={`autocomplete-suggestion ${index+1===activeSuggestion && "selected-suggestion"}`} onClick={() => {handleClick(suggestion)}}> {suggestion} </button>
      ))}
        </>
      <div className="card">
        
      </div>
      

      <div className="autocomplete-selected">
    </div>
    </div>
  );
}
export {Autocomplete};